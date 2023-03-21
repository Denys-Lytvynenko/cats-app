import { FC, useEffect, useState } from "react";

import { VotingController } from "@api/votingController";
import { RandomBreedType } from "@api/votingController/types";
import { useBlockHeight } from "@hooks/useBlockHeight";

import ContentWrapper from "@components/ContentWrapper";
import Image from "@components/Image";
import Loader from "@components/Loader";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import VotingButtonsGroup from "./VotingButtonsGroup";
import VotingMessage from "./VotingMessage";

import "./styles.scss";

const Voting: FC = () => {
    const [messagesBlockRef, height] = useBlockHeight(52);
    const [loading, setLoading] = useState<boolean>(true);
    const [randomBreed, setRandomBreed] = useState<RandomBreedType[0]>({
        breeds: [],
        height: 100,
        id: "",
        url: "",
        width: 100,
    });

    useEffect(() => {
        const abortController = new AbortController();

        const getBreed = async () => {
            try {
                setLoading(true);

                const data =
                    await VotingController.getInstance().getRandomBreed(
                        abortController.signal
                    );

                setRandomBreed(data[0]);
                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request rejected by user");
                } else {
                    console.error("Random breed error: ", error);
                    setLoading(false);
                }
            }
        };

        getBreed();

        return () => abortController.abort();
    }, []);

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <div className="voting__image-wrapper">
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <Image src={randomBreed.url} alt="cat" />

                            <VotingButtonsGroup />
                        </>
                    )}
                </div>

                <div
                    ref={messagesBlockRef}
                    style={{ height }}
                    className="voting__messages-wrapper"
                >
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="like"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="dislike"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="favourite"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="remove"
                    />
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
