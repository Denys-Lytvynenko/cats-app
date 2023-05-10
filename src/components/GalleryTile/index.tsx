import { FC, useState } from "react";

import { cn } from "@utils/classNames";
import { GalleryTileProps } from "./types";

import Loader from "../Loader";
import TileOverlay from "../TileOverlay";

import "./styles.scss";

const GalleryTile: FC<GalleryTileProps> = ({
    image,
    name,
    href,
    overlayButton: OverlayButton,
    isActiveButton,
    isButtonDisabled,
    onButtonClick,
    className,
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const onLoadHandler = () => setLoaded(true);

    return (
        <figure className={cn("gallery__item", "tile", className)}>
            {!loaded && <Loader />}

            <img
                src={image}
                className="tile__image"
                alt={name}
                onLoad={onLoadHandler}
                style={loaded ? {} : { display: "none" }}
            />

            {loaded && OverlayButton && (
                <TileOverlay>
                    <OverlayButton
                        href={href}
                        active={isActiveButton}
                        onClick={onButtonClick}
                        disabled={isButtonDisabled}
                    >
                        {name}
                    </OverlayButton>
                </TileOverlay>
            )}
        </figure>
    );
};

export default GalleryTile;
