import { FC } from "react";

import { ButtonProps } from "../Button/types";

export interface GalleryTileProps {
    className?: string;
    href?: string;
    id?: string;
    image?: string;
    isActiveButton?: boolean;
    isButtonDisabled?: boolean;
    name?: string;
    onButtonClick?: () => void;
    overlayButton?: FC<ButtonProps>;
}
