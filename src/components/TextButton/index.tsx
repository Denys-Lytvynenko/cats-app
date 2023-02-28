import { FC } from "react";

import { TextButtonProps } from "./types";

import "./styles.scss";

const TextButton: FC<TextButtonProps> = ({
    type = "button",
    className,
    children,
}) => (
    <button
        type={type}
        className={`textButton${className ? ` ${className}` : ""}`}
    >
        {children}
    </button>
);

export default TextButton;
