import { FC } from "react";

import { ButtonProps } from "../Button/types";

export interface GalleryTileProps {
    image: string;
    name?: string;
    href?: string;
    overlayButton?: FC<ButtonProps>;
    className?: string;
}
