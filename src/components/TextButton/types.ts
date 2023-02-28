import { ReactNode } from "react";

export type TextButtonProps = {
    type?: "button" | "reset" | "submit";
    className?: string;
    children?: ReactNode;
};
