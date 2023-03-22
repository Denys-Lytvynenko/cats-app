import { FC, useEffect, useState } from "react";

import { FavouritesController } from "@api/favouritesController";
import { ImagesController } from "@api/imagesController";
import { RandomImageType } from "@api/imagesController/types";
import { VotingController } from "@api/votingController";
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
    const [randomBreed, setRandomBreed] = useState<RandomImageType>({
        breeds: [],
        height: 100,
        id: "",
        url: "",
        width: 100,
    });
    const [nextImage, setNextImage] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();

        const getBreed = async () => {
            try {
                setLoading(true);

                const data =
                    await ImagesController.getInstance().getRandomImage(
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
    }, [nextImage]);

    const onLikeClick = async (): Promise<void> => {
        try {
            const data = await VotingController.getInstance().likeBreed(
                randomBreed.id
            );

            if (data.message === "SUCCESS") {
                setNextImage(prev => !prev);
            }
        } catch (error) {
            console.error("Like breed error: ", error);
        }
    };

    const onDislikeClick = async (): Promise<void> => {
        try {
            const data = await VotingController.getInstance().dislikeBreed(
                randomBreed.id
            );

            if (data.message === "SUCCESS") {
                setNextImage(prev => !prev);
            }
        } catch (error) {
            console.error("Dislike breed error: ", error);
        }
    };

    const onFavouriteClick = async (): Promise<void> => {
        try {
            const data =
                await FavouritesController.getInstance().setFavouriteBreed(
                    randomBreed.id
                );

            if (data.message === "SUCCESS") {
                console.log("success");
            }
        } catch (error) {
            console.error("Set favourite error: ", error);
        }
    };

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

                            <VotingButtonsGroup
                                isFavourite={false}
                                onLikeClick={onLikeClick}
                                onFavouriteClick={onFavouriteClick}
                                onDislikeClick={onDislikeClick}
                            />
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
