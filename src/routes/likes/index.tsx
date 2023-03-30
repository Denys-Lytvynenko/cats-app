import { FC, useEffect, useState } from "react";

import { VotingController } from "@api/votingController";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import GalleryTile from "@components/GalleryTile";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";

const Likes: FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<UseTilesDataType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getLikes = async () => {
            try {
                setLoading(true);

                const votes = await VotingController.getInstance().getVotes(
                    abortController.signal
                );

                if (votes) {
                    const likes = votes.filter(({ value }) => value === 10);

                    const actualData: UseTilesDataType[] = likes.map(
                        ({ image: { url } }) => ({ image: url })
                    );

                    setData(actualData);
                } else {
                    setData(null);
                }

                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request canceled by the user");
                } else {
                    console.error("Get likes error: ", error);
                    setData(null);
                    setLoading(false);
                }
            }
        };

        getLikes();

        return () => abortController.abort();
    }, []);

    const tiles = useTiles({ data, component: GalleryTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid loading={loading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Likes;
