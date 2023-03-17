import { ReactNode } from "react";

export interface FileUploadMessageProps {
    status: "success" | "failure";
    className?: string;
    children?: ReactNode;
}
