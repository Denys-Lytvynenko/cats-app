import { ReactNode } from "react";

export interface ButtonProps {
    active?: boolean;
    ariaLabel?: string;
    buttonStyle?: "text-button" | "icon-button" | "icon-text-button";
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    fill?: boolean;
    href?: string;
    navigation?: boolean;
    onClick?: () => void;
    size?: "small" | "large";
    title?: string;
    type?: "button" | "reset" | "submit";
}
