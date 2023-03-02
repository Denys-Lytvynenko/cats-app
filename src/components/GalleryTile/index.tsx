import { FC } from "react";

import { GalleryTileProps } from "./types";
import { cn } from "../../utils/classNames";

import "./styles.scss";

const GalleryTile: FC<GalleryTileProps> = ({
    image,
    name,
    href,
    className,
}) => (
    <figure className={cn("tile", className)}>
        <img src={image} className="tile__image" alt={name} />
    </figure>
);
// TODO add hover component
export default GalleryTile;
