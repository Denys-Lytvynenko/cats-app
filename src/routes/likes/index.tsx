import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import GalleryTile from "@components/GalleryTile";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";

const Likes: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid tileComponent={GalleryTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Likes;
