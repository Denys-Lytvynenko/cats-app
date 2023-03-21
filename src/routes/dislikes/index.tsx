import { FC } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import SectionWrapper from "../../components/SectionWrapper";
import SectionTop from "../../components/SectionTop";
import GalleryGrid from "../../components/GalleryGrid";
import GalleryTile from "../../components/GalleryTile";

const Dislikes: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid tileComponent={GalleryTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Dislikes;
