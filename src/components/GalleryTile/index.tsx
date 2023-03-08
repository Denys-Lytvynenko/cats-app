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
    className,
}) => (
    <figure className={cn("gallery__item", "tile", className)}>
        <img src={image} className="tile__image" alt={name} />

        <TileOverlay>
            {OverlayButton && <OverlayButton href={href}>{name}</OverlayButton>}
        </TileOverlay>
    </figure>
);

export default GalleryTile;
