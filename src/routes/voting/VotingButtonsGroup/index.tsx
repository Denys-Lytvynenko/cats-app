import { FC, useState } from "react";

import { ReactComponent as DislikesIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as FavouritesIcon } from "@assets/icons/favourites.svg";
import { ReactComponent as FavouritesActiveIcon } from "@assets/icons/favouritesActive.svg";
import { ReactComponent as LikesIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const VotingButtonsGroup: FC = () => {
    const [favouriteActive, setFavouriteActive] = useState<boolean>(false);
    const onLikesClick = () => {};
    const onFavouriteClick = () => {
        setFavouriteActive(prev => !prev);
    };
    const onDislikesClick = () => {};

    return (
        <div className="voting__button-group">
            <button
                type="button"
                className="voting__button likes"
                aria-label="likes button"
            >
                <LikesIcon />
            </button>

            <button
                type="button"
                className="voting__button favourites"
                aria-label="favourites button"
                onClick={onFavouriteClick}
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
            >
                <DislikesIcon />
            </button>
        </div>
    );
};

export default VotingButtonsGroup;
