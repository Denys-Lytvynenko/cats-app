import { FC } from "react";

import { cn } from "@utils/classNames";
import { SortingButtonProps } from "./types";

import Button from "../Button";

import "./styles.scss";

const SortingButton: FC<SortingButtonProps> = ({
    ariaLabel,
    className,
    icon,
    isActive,
    onClick,
}) => (
    <Button
        type="button"
        buttonStyle="icon-button"
        size="small"
        className={cn("sorting-button", isActive ? "active" : "", className)}
        onClick={onClick}
        ariaLabel={ariaLabel}
    >
        {icon}
    </Button>
);

export default SortingButton;
