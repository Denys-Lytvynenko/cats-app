import { FC } from "react";

import Button from "@components/Button";
import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Select from "@components/Select";
import GalleryRouteTile from "./GalleryRouteTile";

import { ReactComponent as RefreshIcon } from "@assets/icons/refresh.svg";
import { ReactComponent as UploadIcon } from "@assets/icons/upload.svg";

import "./styles.scss";

const Gallery: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop>
                    <Button
                        buttonStyle="icon-text-button"
                        className="gallery__upload-button"
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
                        options={[{ value: "Some value" }]}
                    />

                    <Select
                        name="type"
                        title="type"
                        label="type"
                        options={[{ value: "Some value" }]}
                    />

                    <Select
                        name="breed"
                        title="breed"
                        label="breed"
                        options={[{ value: "Some value" }]}
                    />

                    <div className="gallery__filters-group">
                        <Select
                            name="limit"
                            title="limit"
                            label="limit"
                            options={[{ value: "Some value" }]}
                        />

                        <Button
                            buttonStyle="icon-button"
                            onClick={() => {}}
                            size="small"
                            ariaLabel="refresh"
                        >
                            <RefreshIcon />
                        </Button>
                    </div>
                </div>
                <GalleryGrid tileComponent={GalleryRouteTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Gallery;
