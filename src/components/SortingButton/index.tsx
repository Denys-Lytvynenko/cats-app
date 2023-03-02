import { FC, useState } from "react";

import { SortingButtonProps } from "./types";

import { cn } from "@utils/classNames";

import "./styles.scss";

const SortingButton: FC<SortingButtonProps> = ({
    icon,
    onClick,
    className,
    ariaLabel,
}) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(prev => !prev);
        onClick();
    };

    return (
        <button
            type="button"
            className={cn("sorting-button", active ? "active" : "", className)}
            onClick={handleClick}
            aria-label={ariaLabel}
        >
            {icon}
        </button>
    );
};

export default SortingButton;
