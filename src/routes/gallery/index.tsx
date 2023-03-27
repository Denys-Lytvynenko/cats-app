import { ChangeEvent, FC, useEffect, useState } from "react";

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
import { UseTilesDataType } from "../../hooks/useTiles/types";
import { useTiles } from "../../hooks/useTiles";
import { ImagesController } from "../../services/api/imagesController";
import { OptionsType } from "../../components/Select/types";

const limitOptions: OptionsType = [
    { value: "5", name: "5 items per page" },
    { value: "10", name: "10 items per page" },
    { value: "15", name: "15 items per page" },
    { value: "20", name: "20 items per page" },
];

const Gallery: FC = () => {
    const [limitValue, setLimitValue] = useState<string>(limitOptions[0].value);
    const onChangeLimit = (event: ChangeEvent<HTMLSelectElement>) =>
        setLimitValue(event.target.value);

    const [update, setUpdate] = useState<boolean>(false);
    const onUpdate = () => setUpdate(prev => !prev);

    const [isOpenUploadModal, setIsOpenUploadModal] = useState<boolean>(false);
    const toggleModal = () => setIsOpenUploadModal(prev => !prev);

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<UseTilesDataType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getGalleryImages = async () => {
            try {
                setLoading(true);
                const galleryImages =
                    await ImagesController.getInstance().getImages({
                        limit: limitValue,
                        page: "0",
                        signal: abortController.signal,
                    });

                if (galleryImages) {
                    const actualData: UseTilesDataType[] = galleryImages.map(
                        ({ id, url }) => ({ id, image: url })
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
                        options={[{ value: "Some value", name: "name" }]}
                        value="name"
                        onChange={() => {}}
                    />

                    <Select
                        name="type"
                        title="type"
                        label="type"
                        options={[{ value: "Some value", name: "name" }]}
                        value="name"
                        onChange={() => {}}
                    />

                    <Select
                        name="breed"
                        title="breed"
                        label="breed"
                        options={[{ value: "Some value", name: "name" }]}
                        value="name"
                        onChange={() => {}}
                    />

                    <div className="gallery__filters-group">
                        <Select
                            name="limit"
                            title="limit"
                            label="limit"
                            options={limitOptions}
                            value={limitValue}
                            onChange={onChangeLimit}
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
