import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import { cn } from "@utils/classNames";

import { ButtonProps } from "./types";

import "./styles.scss";

const Button: FC<ButtonProps> = ({
    active,
    ariaLabel,
    buttonStyle = "text-button",
    children,
    className,
    disabled,
    fill,
    href,
    navigation,
    onClick,
    size,
    title,
    type = "button",
}) => {
    const onClickHandler = () => {
        if (!onClick) return;
        onClick();
    };

    return href && !navigation ? (
        <Link
            to={href}
            className={cn(
                "button",
                buttonStyle,
                size,
                fill ? "fill" : "",
                active ? "active" : "",
                className
            )}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    ) : href && navigation ? (
        <NavLink
            to={href}
            className={cn(
                "button",
                buttonStyle,
                size,
                fill ? "fill" : "",
                active ? "active" : "",
                className
            )}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </NavLink>
    ) : (
        <button
            type={type}
            className={cn(
                "button",
                buttonStyle,
                size,
                fill ? "fill" : "",
                active ? "active" : "",
                className
            )}
            title={title}
            aria-label={ariaLabel}
            onClick={onClickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
