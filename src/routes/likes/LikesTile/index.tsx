import { FC, useCallback, useState } from "react";

import { useAppDispatch } from "@store/hooks";
import { deleteLikeDislike } from "@store/slices/votesSlice";
import { GalleryRouteTileProps } from "../../gallery/GalleryRouteTile/types";

import GalleryTile from "@components/GalleryTile";
import LikesTileButton from "../LikesTileButton";

const LikesTile: FC<GalleryRouteTileProps> = props => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const clickHandler = useCallback(async () => {
        if (props.id) {
            setIsLoading(true);
            await dispatch(deleteLikeDislike(props.id));
            setIsLoading(false);
        }
    }, [props.id]);

    return (
        <GalleryTile
            {...props}
            isButtonDisabled={isLoading}
            onButtonClick={clickHandler}
            className="gallery-route__tile"
            overlayButton={LikesTileButton}
        />
    );
};

export default LikesTile;
