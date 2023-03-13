import { FC } from "react";

import Button from "@components/Button";
import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionWrapper from "@components/SectionWrapper";
import Select from "@components/Select";
import GalleryRouteTile from "./GalleryRouteTile";

import { ReactComponent as RefreshIcon } from "@assets/icons/refresh.svg";

import "./styles.scss";

const Gallery: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <div className="gallery__top">
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

                    <div className="gallery__top-group">
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
