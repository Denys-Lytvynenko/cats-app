import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import GalleryRouteTile from "../gallery/GalleryRouteTile";

const Favourites: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid tileComponent={GalleryRouteTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Favourites;
