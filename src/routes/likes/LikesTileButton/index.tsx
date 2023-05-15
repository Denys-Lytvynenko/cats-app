import { FC } from "react";

import { ButtonProps } from "@components/Button/types";

import Button from "@components/Button";

import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

const LikesTileButton: FC<ButtonProps> = props => (
    <Button
        {...props}
        buttonStyle="icon-button"
        size="small"
        className="gallery__button"
    >
        <CloseIcon />
    </Button>
);

export default LikesTileButton;
