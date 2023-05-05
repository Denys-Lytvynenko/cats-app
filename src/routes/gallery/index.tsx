import { ChangeEvent, FC, useEffect, useState } from "react";

import { BreedsController } from "@api/breedsController";
import { ImagesController } from "@api/imagesController";
import { OptionsType } from "@components/Select/types";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";

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

const initialOptions: OptionsType = [{ name: "None", value: "" }];

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
    const [orderValue, setOrderValue] = useState<string>(orderOptions[0].value);
    const onOrderChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setOrderValue(event.target.value);

    const [typeValue, setTypeValue] = useState<string>(typeOptions[0].value);
    const onTypeChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setTypeValue(event.target.value);

    const [breedsOptions, setBreedsOptions] =
        useState<OptionsType>(initialOptions);
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
    const toggleModal = () => setIsOpenUploadModal(prev => !prev);

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<UseTilesDataType | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        // Fetch gallery images depending on query parameters
        const getGalleryImages = async () => {
            try {
                setLoading(true);

                const queryParams = new String().concat(
                    `&order=${orderValue}`,
                    `&mime_types=${typeValue}`,
                    breedsValue ? `&breed_ids=${breedsValue}` : ""
                );

                const galleryImages =
                    await ImagesController.getInstance().getImages({
                        limit: limitValue,
                        page: "0",
                        queryParams,
                        signal: abortController.signal,
                    });

                if (galleryImages) {
                    const actualData: UseTilesDataType = galleryImages.map(
                        ({ id, url }) => ({
                            id,
                            image: url,
                        })
                    );

                    setData(actualData);
                } else {
                    setData(null);
                }

                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request canceled by the user");
                } else {
                    console.error("Get gallery images error: ", error);
                    setData(null);
                    setLoading(false);
                }
            }
        };

        getGalleryImages();

        return () => abortController.abort();
    }, [update]);

    useEffect(() => {
        const abortController = new AbortController();

        // Fetch breeds select options from the API
        const getBreedsOptions = async () => {
            try {
                const allBreeds =
                    await BreedsController.getInstance().getBreeds();

                if (allBreeds) {
                    const breedsOpt = allBreeds
                        .map(({ id, name }) => ({
                            name,
                            value: id,
                        }))
                        .filter(item => item.name && item.value);

                    breedsOpt.unshift(initialOptions[0]);

                    // Remove duplicated options
                    const filteredOpt = breedsOpt.filter(
                        (item, index, self) =>
                            index ===
                            self.findIndex(
                                t =>
                                    t?.value === item?.value &&
                                    t?.name === item?.name
                            )
                    );

                    setBreedsOptions(filteredOpt);
                } else {
                    setBreedsOptions(initialOptions);
                }
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request canceled by the user");
                } else {
                    console.error("Get breeds options error: ", error);
                    setBreedsOptions(initialOptions);
                }
            }
        };

        getBreedsOptions();

        return () => abortController.abort();
    }, []);

    const tiles = useTiles({ data, component: GalleryRouteTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop>
                    <Button
                        buttonStyle="icon-text-button"
                        className="gallery__upload-button"
                        onClick={toggleModal}
                    >
                        <UploadIcon />
                        Upload
                    </Button>
                </SectionTop>

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
                        >
                            <RefreshIcon />
                        </Button>
                    </div>
                </div>

                <GalleryGrid loading={loading} tiles={tiles} />

                <UploadModal isOpen={isOpenUploadModal} onClose={toggleModal}>
                    Modal content
                </UploadModal>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Gallery;
