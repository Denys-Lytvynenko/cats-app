import { FC } from "react";

import { cn } from "../../utils/classNames";
import { GalleryTileProps } from "./types";

import TileOverlay from "../TileOverlay";

import "./styles.scss";
import Button from "../Button";

const GalleryTile: FC<GalleryTileProps> = ({
    image,
    name,
    href,
    className,
}) => {
    return (
        <figure className={cn("tile", className)}>
            <img src={image} className="tile__image" alt={name} />

            <TileOverlay></TileOverlay>
        </figure>
    );
};

export default GalleryTile;
