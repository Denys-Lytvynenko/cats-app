import { FC, ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";

import { cn } from "@utils/classNames";

import { ButtonProps } from "./types";

import "./styles.scss";

const Button: FC<ButtonProps> = ({
    type = "button",
    buttonStyle = "text-button",
    size,
    href,
    className,
    ariaLabel,
    children,
}) =>
    href ? (
        <Link to={href} className={cn("button", buttonStyle, size, className)}>
            {children}
        </Link>
    ) : (
        <button
            type={type}
            className={cn("button", buttonStyle, size, className)}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );

export default Button;
