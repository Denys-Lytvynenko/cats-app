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
import ItemNotFound from "../../components/ItemNotFound";

const Voting: FC = () => {
    const isTablet = useAppSelector(state => state.mobile.isTablet);
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

        return () => signal.abort("Abort fetchRandomImage");
    }, [nextImage]);

    useEffect(() => {
        if (!randomBreedImage.id) return;

        const signal = dispatch(fetchActionLogMessages(randomBreedImage!.id));

        return () => signal.abort("Abort fetchActionLogMessages");
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

    // useEffect(() => {
    //     async function deleteBreeds() {
    //         const votes = await VotingController.getInstance().getVotes();

    //         votes.forEach(breed => {
    //             fetch(`https://api.thecatapi.com/v1/votes/${breed.id}`, {
    //                 headers: {
    //                     Accept: "application/json",
    //                     "Content-Type": "application/json",
    //                     "Access-Control-Allow-Headers": "Accept, Content-Type",
    //                     "x-api-key": import.meta.env.VITE_API_KEY,
    //                 },
    //                 method: "DELETE",
    //             });
    //         });
    //     }

    //     deleteBreeds();
    // }, []);
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
                    style={{ height: isTablet ? "100%" : height }}
                    className="voting__messages-wrapper"
                >
                    {messagesLoading ? (
                        <Loader />
                    ) : messages?.length ? (
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
                    ) : (
                        <ItemNotFound />
                    )}
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
