import { FC, useState, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    deleteFavourite,
    fetchFavourites,
    setFavouriteBreed,
} from "@store/slices/votesSlice";
import { GalleryRouteTileProps } from "./types";

import GalleryTile from "@components/GalleryTile";
import GalleryRouteTileButton from "../GalleryRouteTileButton";

const GalleryRouteTile: FC<GalleryRouteTileProps> = props => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { favourites } = useAppSelector(state => state.votes.favourites);
    const dispatch = useAppDispatch();

    const isFavourite = favourites?.find(item => item.image_id === props.id);

    const clickHandler = useCallback(async () => {
        setIsLoading(true);

        if (!!isFavourite) {
            await dispatch(deleteFavourite(isFavourite.id.toString()));
        } else {
            await dispatch(setFavouriteBreed(props.id!));
        }

        await dispatch(fetchFavourites());

        setIsLoading(false);
    }, [isFavourite]);

    return (
        <GalleryTile
            {...props}
            isActiveButton={!!isFavourite}
            isButtonDisabled={isLoading}
            onButtonClick={clickHandler}
            className="gallery-route__tile"
            overlayButton={GalleryRouteTileButton}
        />
    );
};

export default GalleryRouteTile;
