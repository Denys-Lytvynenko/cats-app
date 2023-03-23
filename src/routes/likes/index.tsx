import { FC, useEffect, useState } from "react";

import { VotingController } from "@api/votingController";
import { GetVotesResponseType } from "@api/votingController/types";

import ContentWrapper from "@components/ContentWrapper";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import LikesGalleryGrid from "./LikesGalleryGrid";

const Likes: FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<GetVotesResponseType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getLikes = async () => {
            try {
                setLoading(true);
                const data = await VotingController.getInstance().getVotes(
                    abortController.signal
                );

                const likes = data.filter(({ value }) => value === 10);

                setData(likes);
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

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <LikesGalleryGrid loading={loading} data={data} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Likes;
