import { ReactNode } from "react";

export interface TypographyProps {
    tag:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "p"
        | "span"
        | "small"
        | "strong"
        | "em";
    color?: "gray" | "black";
    className?: string;
    children?: ReactNode;
}
