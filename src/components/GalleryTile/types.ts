import { FC } from "react";

import { ButtonProps } from "../Button/types";

export interface GalleryTileProps {
    className?: string;
    href?: string;
    image?: string;
    name?: string;
    overlayButton?: FC<ButtonProps>;
}
