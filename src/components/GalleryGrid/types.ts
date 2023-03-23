import { FC } from "react";

import { BreedType } from "services/api/types";
import { GalleryTileProps } from "../GalleryTile/types";

export interface GalleryGridProps {
    tileComponent: FC<GalleryTileProps>;
    data: BreedType[] | null;
    loading: boolean;
}
