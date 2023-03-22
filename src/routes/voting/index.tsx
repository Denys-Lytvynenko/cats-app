import { FC, useEffect, useState } from "react";

import { FavouritesController } from "@api/favouritesController";
import { ImagesController } from "@api/imagesController";
import { RandomImageType } from "@api/imagesController/types";
import { VotingController } from "@api/votingController";
import { GetVotesResponseType } from "@api/votingController/types";
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
    const [isFavourite, setIsFavourite] = useState<string>("");
    const [updateFavourites, setUpdateFavourites] = useState<boolean>(true);
    const [actionLog, setActionLog] = useState<GetVotesResponseType[]>();

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

    useEffect(() => {
        const abortController = new AbortController();

        const getFavourites = async (currentBreed: string) => {
            try {
                const data =
                    await FavouritesController.getInstance().getFavourites(
                        abortController.signal
                    );

                const isFavourite = data.find(
                    item => item.image_id === currentBreed
                );

                if (isFavourite) {
                    setIsFavourite(isFavourite.id.toString());
                } else {
                    setIsFavourite("");
                }
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request rejected by user");
                } else {
                    console.error("Get favourite error: ", error);
                }
            }
        };

        const getVotes = async (): Promise<void> => {
            try {
                const data = await VotingController.getInstance().getVotes(
                    abortController.signal
                );

                setActionLog(data);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request rejected by user");
                } else {
                    console.error("Get votes error: ", error);
                }
            }
        };

        getVotes();

        if (!randomBreed.id) return;

        getFavourites(randomBreed.id);

        return () => abortController.abort();
    }, [randomBreed.id, updateFavourites]);

    const onLikeClick = async (): Promise<void> => {
        try {
            const data = await VotingController.getInstance().like(
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
            const data = await VotingController.getInstance().dislike(
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
            if (!isFavourite) {
                // Set favourite
                const data =
                    await FavouritesController.getInstance().setFavourite(
                        randomBreed.id
                    );

                if (data.message === "SUCCESS") {
                    setUpdateFavourites(prev => !prev);
                }
            } else {
                // Delete favourite
                const data =
                    await FavouritesController.getInstance().deleteFavourite(
                        isFavourite
                    );

                if (data.message === "SUCCESS") {
                    setIsFavourite("");
                }
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
                                isFavourite={!!isFavourite}
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
                    {actionLog
                        ?.map(({ id, created_at, image_id, value }) => (
                            <VotingMessage
                                key={id}
                                time={created_at}
                                imageId={image_id}
                                reaction={value > 1 ? "like" : "dislike"}
                            />
                        ))
                        .reverse()}
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
