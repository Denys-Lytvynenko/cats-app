import { ReactNode } from "react";

export interface MessageProps {
    status: "success" | "failure";
    className?: string;
    children?: ReactNode;
}
