import { FC } from "react";

import { GalleryTileProps } from "./types";
import { cn } from "../../utils/classNames";

import "./styles.scss";

const GalleryTile: FC<GalleryTileProps> = ({
    image,
    name,
    href,
    className,
}) => {
    return (
        <figure className={cn("tile", className)}>
            <img src={image} className="tile__image" alt={name} />
        </figure>
    );
};

export default GalleryTile;
