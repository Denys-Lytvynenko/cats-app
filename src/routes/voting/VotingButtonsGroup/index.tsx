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
            title="like breed button"
        >
            <LikesIcon />
        </button>

        <button
            type="button"
            className="voting__button favourites"
            aria-label="favourites button"
            onClick={onFavouriteClick}
            disabled={disabled}
            title="favourite breed button"
        >
            {isFavourite ? <FavouritesActiveIcon /> : <FavouritesIcon />}
        </button>

        <button
            type="button"
            className="voting__button dislikes"
            aria-label="dislikes button"
            onClick={onDislikeClick}
            disabled={disabled}
            title="dislike breed button"
        >
            <DislikesIcon />
        </button>
    </div>
);

export default VotingButtonsGroup;
