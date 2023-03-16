import { FC } from "react";
import { useParams } from "react-router-dom";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import GoBackButton from "@components/GoBackButton";
import ItemNotFound from "@components/ItemNotFound";
import SectionName from "@components/SectionName";
import SectionWrapper from "@components/SectionWrapper";
import Typography from "@components/Typography";
import BreedsTile from "../breeds/BreedsTile";

import "./styles.scss";

const Search: FC = () => {
    const { searchId } = useParams();

    return (
        <ContentWrapper>
            <SectionWrapper>
                <div className="search__top">
                    <GoBackButton />

                    <SectionName name />
                </div>

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

                <ItemNotFound />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Search;
