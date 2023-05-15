import { ChangeEvent, FC, useEffect, useState } from "react";

import { OptionsType } from "@components/Select/types";
import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchBreedsOptions } from "@store/slices/breedsSlice";
import { fetchGalleryImages } from "@store/slices/gallerySlice";
import { setLockScroll } from "@store/slices/mobileSlice";

import Button from "@components/Button";
import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Select from "@components/Select";
import GalleryRouteTile from "./GalleryRouteTile";
import UploadModal from "./UploadModal/UploadModal";

import { ReactComponent as RefreshIcon } from "@assets/icons/refresh.svg";
import { ReactComponent as UploadIcon } from "@assets/icons/upload.svg";

import "./styles.scss";

export const orderOptions: OptionsType = [
    { name: "Random", value: "random" },
    { name: "Asc", value: "asc" },
    { name: "Desc", value: "desc" },
];

const typeOptions: OptionsType = [
    { name: "All", value: "jpg,png,gif" },
    { name: "Static", value: "jpg,png" },
    { name: "Animated", value: "gif" },
];

const limitOptions: OptionsType = [
    { name: "5 items per page", value: "5" },
    { name: "10 items per page", value: "10" },
    { name: "15 items per page", value: "15" },
    { name: "20 items per page", value: "20" },
];

const Gallery: FC = () => {
    const { loading, data } = useAppSelector(state => state.gallery);
    const breedsOptions = useAppSelector(state => state.breeds.breedsOptions);
    const isTablet = useAppSelector(state => state.mobile.isTablet);

    const dispatch = useAppDispatch();

    const [orderValue, setOrderValue] = useState<string>(orderOptions[0].value);
    const onOrderChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setOrderValue(event.target.value);

    const [typeValue, setTypeValue] = useState<string>(typeOptions[0].value);
    const onTypeChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setTypeValue(event.target.value);

    const [breedsValue, setBreedsValue] = useState<string>(
        breedsOptions[0].value
    );
    const onBreedChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setBreedsValue(event.target.value);

    const [limitValue, setLimitValue] = useState<string>(limitOptions[0].value);
    const onLimitChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setLimitValue(event.target.value);

    const [update, setUpdate] = useState<boolean>(false);
    const onUpdate = () => setUpdate(prev => !prev);

    const [isOpenUploadModal, setIsOpenUploadModal] = useState<boolean>(false);
    const toggleModal = () => {
        setIsOpenUploadModal(prev => !prev);
        dispatch(setLockScroll(!isOpenUploadModal));
    };

    useEffect(() => {
        const signal = dispatch(
            fetchGalleryImages({
                breedsValue,
                limitValue,
                orderValue,
                typeValue,
            })
        );

        return () => signal.abort("Abort fetchGalleryImages");
    }, [update]);

    useEffect(() => {
        const signal = dispatch(fetchBreedsOptions());

        return () => signal.abort("Abort fetchBreedsOptions");
    }, []);

    const tiles = useTiles({ data, component: GalleryRouteTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop>
                    {!isTablet && (
                        <Button
                            buttonStyle="icon-text-button"
                            className="gallery__upload-button"
                            onClick={toggleModal}
                        >
                            <UploadIcon />
                            Upload
                        </Button>
                    )}
                </SectionTop>

                {isTablet && (
                    <Button
                        buttonStyle="icon-text-button"
                        className="gallery__upload-button"
                        onClick={toggleModal}
                        title="Upload modal button"
                    >
                        <UploadIcon />
                        Upload
                    </Button>
                )}

                <div className="gallery__filters">
                    <Select
                        name="order"
                        title="order"
                        label="order"
                        options={orderOptions}
                        value={orderValue}
                        onChange={onOrderChange}
                    />

                    <Select
                        name="type"
                        title="type"
                        label="type"
                        options={typeOptions}
                        value={typeValue}
                        onChange={onTypeChange}
                    />

                    <Select
                        name="breed"
                        title="breed"
                        label="breed"
                        options={breedsOptions}
                        value={breedsValue}
                        onChange={onBreedChange}
                    />

                    <div className="gallery__filters-group">
                        <Select
                            name="limit"
                            title="limit"
                            label="limit"
                            options={limitOptions}
                            value={limitValue}
                            onChange={onLimitChange}
                        />

                        <Button
                            buttonStyle="icon-button"
                            onClick={onUpdate}
                            size="small"
                            ariaLabel="refresh"
                            className="gallery__refresh-button"
                            title="Update"
                        >
                            <RefreshIcon />
                        </Button>
                    </div>
                </div>

                <GalleryGrid
                    loading={loading}
                    tiles={tiles}
                    className="gallery__gallery-grid"
                />

                <UploadModal isOpen={isOpenUploadModal} onClose={toggleModal} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Gallery;
