import { FC, ReactNode, useMemo } from "react";

import { cn } from "@utils/classNames";

import { ButtonProps } from "./types";

import "./styles.scss";

const Button: FC<ButtonProps> = ({
    type = "button",
    buttonStyle = "text-button",
    size,
    className,
    ariaLabel,
    children,
}) => (
    <button
        type={type}
        className={cn("button", buttonStyle, size, className)}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

export default Button;
