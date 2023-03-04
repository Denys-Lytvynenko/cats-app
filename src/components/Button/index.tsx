import { FC } from "react";
import { Link } from "react-router-dom";

import { cn } from "@utils/classNames";

import { ButtonProps } from "./types";

import "./styles.scss";

const Button: FC<ButtonProps> = ({
    type = "button",
    buttonStyle = "text-button",
    size,
    onClick,
    href,
    className,
    ariaLabel,
    fill,
    children,
}) => {
    const onClickHandler = () => {
        if (!onClick) return;
        onClick();
    };

    return href ? (
        <Link
            to={href}
            className={cn(
                "button",
                buttonStyle,
                size,
                fill ? "fill" : "",
                className
            )}
        >
            {children}
        </Link>
    ) : (
        <button
            type={type}
            className={cn(
                "button",
                buttonStyle,
                size,
                fill ? "fill" : "",
                className
            )}
            aria-label={ariaLabel}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
