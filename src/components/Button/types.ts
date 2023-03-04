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
    children?: ReactNode;
}
