import { ReactNode } from "react";

export interface ButtonProps {
    buttonStyle?: "text-button" | "icon-button" | "icon-text-button";
    size?: "small" | "large";
    type?: "button" | "reset" | "submit";
    href?: string;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
    fill?: boolean;
    active?: boolean;
    navigation?: boolean;
    children?: ReactNode;
    title?: string;
}
