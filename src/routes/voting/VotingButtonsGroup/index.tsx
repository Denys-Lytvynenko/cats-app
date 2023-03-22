import { FC } from "react";

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
}) => (
    <div className="voting__button-group">
        <button
            type="button"
            className="voting__button likes"
            aria-label="likes button"
            onClick={onLikeClick}
        >
            <LikesIcon />
        </button>

        <button
            type="button"
            className="voting__button favourites"
            aria-label="favourites button"
            onClick={onFavouriteClick}
        >
            {isFavourite ? <FavouritesActiveIcon /> : <FavouritesIcon />}
        </button>

        <button
            type="button"
            className="voting__button dislikes"
            aria-label="dislikes button"
            onClick={onDislikeClick}
        >
            <DislikesIcon />
        </button>
    </div>
);

export default VotingButtonsGroup;
