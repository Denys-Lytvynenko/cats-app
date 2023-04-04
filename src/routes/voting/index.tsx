import { FC, useEffect, useState } from "react";

import { FavouritesController } from "@api/favouritesController";
import { ImagesController } from "@api/imagesController";
import { RandomImageType } from "@api/imagesController/types";
import { VotingController } from "@api/votingController";
import { useBlockHeight } from "@hooks/useBlockHeight";
import { LogMessageDataType } from "./types";

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
    const [imageLoading, setImageLoading] = useState<boolean>(true);
    const [messageLoading, setMessageLoading] = useState<boolean>(true);
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
    const [actionLog, setActionLog] = useState<LogMessageDataType[] | null>(
        null
    );

    useEffect(() => {
        const abortController = new AbortController();

        const getBreed = async () => {
            try {
                setImageLoading(true);

                const data =
                    await ImagesController.getInstance().getRandomImage(
                        abortController.signal
                    );

                setRandomBreed(data[0]);
                setImageLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request rejected by user");
                } else {
                    console.error("Random breed error: ", error);
                    setImageLoading(false);
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
                setMessageLoading(true);

                const favourites =
                    await FavouritesController.getInstance().getFavourites(
                        abortController.signal
                    );

                const votes = await VotingController.getInstance().getVotes(
                    abortController.signal
                );

                if (favourites && votes) {
                    // Get action log
                    const convertFavourites: LogMessageDataType[] =
                        favourites.map(({ id, created_at, image_id }) => ({
                            id,
                            created_at,
                            image_id,
                            value: 5,
                        }));

                    const convertVotes: LogMessageDataType[] = votes.map(
                        ({ id, created_at, image_id, value }) => ({
                            id,
                            created_at,
                            image_id,
                            value,
                        })
                    );

                    const concatenated: LogMessageDataType[] =
                        convertFavourites.concat(convertVotes);

                    const sortedByData = concatenated.sort(
                        (a, b) =>
                            new Date(b.created_at).getTime() -
                            new Date(a.created_at).getTime()
                    );

                    setActionLog(sortedByData);

                    // Check if current image is in favourite
                    const isFavourite = favourites.find(
                        item => item.image_id === currentBreed
                    );

                    if (isFavourite) {
                        setIsFavourite(isFavourite.id.toString());
                    }
                } else {
                    setActionLog(null);
                    setIsFavourite("");
                }

                setMessageLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request rejected by user");
                } else {
                    console.error("Get favourite error: ", error);
                    setActionLog(null);
                    setIsFavourite("");
                    setMessageLoading(false);
                }
            }
        };

        if (!randomBreed.id) return;

        getFavourites(randomBreed.id);

        return () => abortController.abort();
    }, [randomBreed.id, updateFavourites]);

    const onLikeClick = async (): Promise<void> => {
        try {
            setImageLoading(true);

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
            setImageLoading(true);

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
            setMessageLoading(true);

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
                    setMessageLoading(false);
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
                    {imageLoading ? (
                        <Loader />
                    ) : (
                        <Image src={randomBreed.url} alt="cat" />
                    )}
                    <VotingButtonsGroup
                        disabled={imageLoading || messageLoading}
                        isFavourite={!!isFavourite}
                        onLikeClick={onLikeClick}
                        onFavouriteClick={onFavouriteClick}
                        onDislikeClick={onDislikeClick}
                    />
                </div>

                <div
                    ref={messagesBlockRef}
                    style={{ height }}
                    className="voting__messages-wrapper"
                >
                    {messageLoading ? (
                        <Loader />
                    ) : (
                        actionLog?.map(
                            ({ id, created_at, image_id, value }) => (
                                <VotingMessage
                                    key={id}
                                    time={created_at}
                                    imageId={image_id}
                                    reaction={
                                        value === 10
                                            ? "like"
                                            : value === 1
                                            ? "dislike"
                                            : "favourite"
                                    }
                                />
                            )
                        )
                    )}
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
