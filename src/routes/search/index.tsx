import { FC } from "react";
import { useParams } from "react-router-dom";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Typography from "@components/Typography";
import BreedsTile from "../breeds/BreedsTile";

import "./styles.scss";

const Search: FC = () => {
    const { searchId } = useParams();

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <div className="search__description">
                    <Typography tag="p">Search results for:</Typography>

                    <Typography
                        tag="p"
                        color="black"
                        className="search__keyword"
                    >
                        {searchId}
                    </Typography>
                </div>

                <GalleryGrid tileComponent={BreedsTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Search;
