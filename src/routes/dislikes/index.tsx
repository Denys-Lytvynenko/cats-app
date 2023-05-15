import { FC, useEffect } from "react";

import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchVotes } from "@store/slices/votesSlice";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import LikesTile from "../likes/LikesTile";

const Dislikes: FC = () => {
    const { votesLoading, dislikes, updateVotes } = useAppSelector(
        state => state.votes.voting
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const signal = dispatch(fetchVotes());

        return () => signal.abort("Abort fetchVotes");
    }, [updateVotes]);

    const tiles = useTiles({ data: dislikes, component: LikesTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid
                    loading={votesLoading}
                    tiles={tiles}
                    className="favourites__gallery-grid"
                />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Dislikes;
