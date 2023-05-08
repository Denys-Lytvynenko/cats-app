import { FC, useEffect } from "react";

import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchVotes } from "@store/slices/votesSlice";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import GalleryTile from "@components/GalleryTile";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";

const Dislikes: FC = () => {
    const { votesLoading, dislikes } = useAppSelector(
        state => state.votes.voting
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const signal = dispatch(fetchVotes());

        return () => signal.abort("Abort fetchVotes");
    }, []);

    const tiles = useTiles({ data: dislikes, component: GalleryTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid loading={votesLoading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Dislikes;
