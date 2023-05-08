import { FC, useEffect } from "react";

import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchFavourites } from "@store/slices/votesSlice";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import GalleryRouteTile from "../gallery/GalleryRouteTile";

const Favourites: FC = () => {
    const { favourites, favouritesLoading } = useAppSelector(
        state => state.votes.favourites
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const signal = dispatch(fetchFavourites());

        return () => signal.abort("Abort fetchFavourites");
    }, []);

    const tiles = useTiles({ data: favourites, component: GalleryRouteTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid loading={favouritesLoading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Favourites;
