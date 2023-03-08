import { FC } from "react";

import { GalleryTileProps } from "../GalleryTile/types";

export interface GalleryGridProps {
    tileComponent: FC<GalleryTileProps>;
}
