import { FC } from "react";

import { VotingButtonsGroupProps } from "./types";

import { ReactComponent as DislikesIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as FavouritesIcon } from "@assets/icons/favourites.svg";
import { ReactComponent as FavouritesActiveIcon } from "@assets/icons/favouritesActive.svg";
import { ReactComponent as LikesIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const VotingButtonsGroup: FC<VotingButtonsGroupProps> = ({
    disabled,
    isFavourite,
    onDislikeClick,
    onFavouriteClick,
    onLikeClick,
}) => (
    <div className="voting__button-group">
        <button
            type="button"
            className="voting__button likes"
            aria-label="likes button"
            onClick={onLikeClick}
            disabled={disabled}
        >
            <LikesIcon />
        </button>

        <button
            type="button"
            className="voting__button favourites"
            aria-label="favourites button"
            onClick={onFavouriteClick}
            disabled={disabled}
        >
            {isFavourite ? <FavouritesActiveIcon /> : <FavouritesIcon />}
        </button>

        <button
            type="button"
            className="voting__button dislikes"
            aria-label="dislikes button"
            onClick={onDislikeClick}
            disabled={disabled}
        >
            <DislikesIcon />
        </button>
    </div>
);

export default VotingButtonsGroup;
