import { FC } from "react";

import { cn } from "@utils/classNames";
import { MessageProps } from "./types";

import { ReactComponent as FailureIcon } from "@assets/icons/failure.svg";
import { ReactComponent as SuccessIcon } from "@assets/icons/success.svg";
import Typography from "../../../../components/Typography";

const Message: FC<MessageProps> = ({ status, className, children }) => (
    <div className={cn("upload-modal__message", className)}>
        {status === "success" ? <SuccessIcon /> : <FailureIcon />}
        <Typography tag="p" className="upload-modal__message-text">
            {children}
        </Typography>
    </div>
);

export default Message;
