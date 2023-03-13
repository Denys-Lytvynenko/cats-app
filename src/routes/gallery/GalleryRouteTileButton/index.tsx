import { FC } from "react";

import { GalleryRouteTileButtonProps } from "./types";

import Button from "@components/Button";

import { ReactComponent as HeardIcon } from "@assets/icons/heard.svg";

const GalleryRouteTileButton: FC<GalleryRouteTileButtonProps> = props => (
    <Button
        {...props}
        buttonStyle="icon-button"
        size="small"
        className="gallery__button"
    >
        <HeardIcon />
    </Button>
);

export default GalleryRouteTileButton;
