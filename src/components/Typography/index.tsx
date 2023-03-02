import { FC } from "react";

import { cn } from "@utils/classNames";
import { TypographyProps } from "./types";

import "./styles.scss";

const Typography: FC<TypographyProps> = ({
    tag: Component,
    color,
    className,
    children,
}) => (
    <Component className={cn("typography", Component, color, className)}>
        {children}
    </Component>
);

export default Typography;
