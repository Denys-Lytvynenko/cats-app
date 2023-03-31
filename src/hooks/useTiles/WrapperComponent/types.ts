import { FC } from "react";

import { GalleryTileProps } from "@components/GalleryTile/types";

export interface WrapperComponentProps extends Partial<GalleryTileProps> {
    component: FC<Partial<GalleryTileProps>>;
}
