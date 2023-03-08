import { FC } from "react";

import { BreedsTileProps } from "./types";

import GalleryTile from "@components/GalleryTile";
import BreedsTileButton from "../BreedsTileButton";

const BreedsTile: FC<BreedsTileProps> = props => (
    <GalleryTile
        {...props}
        className="breeds__tile"
        overlayButton={BreedsTileButton}
    />
);

export default BreedsTile;
