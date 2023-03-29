import { FC } from "react";

import { cn } from "@utils/classNames";
import { FileUploadMessageProps } from "./types";

import Typography from "@components/Typography";

import { ReactComponent as FailureIcon } from "@assets/icons/failure.svg";
import { ReactComponent as SuccessIcon } from "@assets/icons/success.svg";

import "./styles.scss";

const FileUploadMessage: FC<FileUploadMessageProps> = ({
    status,
    className,
    children,
}) => (
    <div className={cn("file-upload__message ", className)}>
        {status === "success" ? <SuccessIcon /> : <FailureIcon />}
        <Typography tag="p" className="file-upload__message-text">
            {children}
        </Typography>
    </div>
);

export default FileUploadMessage;
