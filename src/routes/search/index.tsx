import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { findBreed } from "@store/slices/searchSlice";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Typography from "@components/Typography";
import BreedsTile from "../breeds/BreedsTile";

import "./styles.scss";

const Search: FC = () => {
    const { searchId } = useParams();

    const { searchLoading, searchData } = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const signal = dispatch(findBreed(searchId!));

        return () => signal.abort("Abort findBreed");
    }, [searchId]);

    const tiles = useTiles({ data: searchData, component: BreedsTile });

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

                <GalleryGrid loading={searchLoading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Search;
