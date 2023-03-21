import { FC } from "react";

import { BreedType } from "@utils/api/types";
import { GalleryTileProps } from "../GalleryTile/types";

export interface GalleryGridProps {
    tileComponent: FC<GalleryTileProps>;
    data: BreedType[] | null;
    loading: boolean;
}
