import { FC } from "react";

import { cn } from "@utils/classNames";

import { TextButtonProps } from "./types";

import "./styles.scss";

const TextButton: FC<TextButtonProps> = ({
    type = "button",
    className,
    children,
}) => (
    <button type={type} className={cn("textButton", className)}>
        {children}
    </button>
);

export default TextButton;
