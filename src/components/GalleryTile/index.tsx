import { FC } from "react";

import { cn } from "@utils/classNames";
import { GalleryTileProps } from "./types";

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
}) => (
    <figure className={cn("gallery__item", "tile", className)}>
        <img src={image} className="tile__image" alt={name} />

        {OverlayButton && (
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

export default GalleryTile;
