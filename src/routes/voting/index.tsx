import { FC, useEffect } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    deleteFavourite,
    dislikeBreed,
    fetchActionLogMessages,
    fetchRandomImage,
    likeBreed,
    setFavouriteBreed,
} from "@store/slices/votesSlice";

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

    const {
        nextImage,
        updateFavourites,
        isFavourite,
        actionLogMessages: { messages, messagesLoading },
        randomBreedImage: { randomBreedImage, randomBreedImageLoading },
    } = useAppSelector(state => state.votes);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const signal = dispatch(fetchRandomImage());

        return () => signal.abort();
    }, [nextImage]);

    useEffect(() => {
        if (!randomBreedImage.id) return;

        const signal = dispatch(fetchActionLogMessages(randomBreedImage!.id));

        return () => signal.abort();
    }, [randomBreedImage.id, updateFavourites]);

    const onLikeClick = () => dispatch(likeBreed(randomBreedImage.id));

    const onDislikeClick = () => dispatch(dislikeBreed(randomBreedImage.id));

    const onFavouriteClick = async (): Promise<void> => {
        if (!isFavourite) {
            dispatch(setFavouriteBreed(randomBreedImage.id));
        } else {
            dispatch(deleteFavourite(isFavourite));
        }
    };

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <div className="voting__image-wrapper">
                    {randomBreedImageLoading || !randomBreedImage.url ? (
                        <Loader />
                    ) : (
                        <Image src={randomBreedImage.url} alt="cat" />
                    )}

                    <VotingButtonsGroup
                        disabled={randomBreedImageLoading || messagesLoading}
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
                    {messagesLoading ? (
                        <Loader />
                    ) : (
                        messages?.map(({ id, created_at, image_id, value }) => (
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
                        ))
                    )}
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
