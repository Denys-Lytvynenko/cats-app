import { FC, useState } from "react";

import { VotingButtonsGroupProps } from "./types";

import { ReactComponent as DislikesIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as FavouritesIcon } from "@assets/icons/favourites.svg";
import { ReactComponent as FavouritesActiveIcon } from "@assets/icons/favouritesActive.svg";
import { ReactComponent as LikesIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const VotingButtonsGroup: FC<VotingButtonsGroupProps> = ({
    isFavourite,
    onLikeClick,
    onFavouriteClick,
    onDislikeClick,
}) => {
    const [favouriteActive, setFavouriteActive] =
        useState<boolean>(isFavourite);

    const handleLikeClick = () => onLikeClick();
    const handleFavouriteClick = () => {
        onFavouriteClick();
        setFavouriteActive(prev => !prev);
    };
    const handleDislikeClick = () => onDislikeClick();

    return (
        <div className="voting__button-group">
            <button
                type="button"
                className="voting__button likes"
                aria-label="likes button"
                onClick={handleLikeClick}
            >
                <LikesIcon />
            </button>

            <button
                type="button"
                className="voting__button favourites"
                aria-label="favourites button"
                onClick={handleFavouriteClick}
            >
                {favouriteActive ? (
                    <FavouritesActiveIcon />
                ) : (
                    <FavouritesIcon />
                )}
            </button>

            <button
                type="button"
                className="voting__button dislikes"
                aria-label="dislikes button"
                onClick={handleDislikeClick}
            >
                <DislikesIcon />
            </button>
        </div>
    );
};

export default VotingButtonsGroup;
