import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { GoBackButtonProps } from "./types";

import Button from "../Button";

import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";

const GoBackButton: FC<GoBackButtonProps> = ({ className }) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <Button
            size="small"
            buttonStyle="icon-button"
            onClick={goBack}
            ariaLabel="back button"
            fill
            className={className}
            title="Go back button"
        >
            <ArrowLeft />
        </Button>
    );
};

export default GoBackButton;
