import { FC } from "react";

import { cn } from "@utils/classNames";
import { ImageProps } from "./types";

import "./styles.scss";

const Image: FC<ImageProps> = ({ src, className, alt, style }) => (
    <figure className={cn("image", className)} style={style}>
        <img src={src} alt={alt} />
    </figure>
);

export default Image;
