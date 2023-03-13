import { FC } from "react";

import { GalleryRouteTileProps } from "./types";

import GalleryTile from "@components/GalleryTile";
import GalleryRouteTileButton from "../GalleryRouteTileButton";

const GalleryRouteTile: FC<GalleryRouteTileProps> = props => (
    <GalleryTile
        {...props}
        className="gallery-route__tile"
        overlayButton={GalleryRouteTileButton}
    />
);

export default GalleryRouteTile;
