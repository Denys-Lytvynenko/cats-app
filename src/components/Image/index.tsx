import { FC } from "react";

import { cn } from "@utils/classNames";
import { ImageProps } from "./types";

import "./styles.scss";

const Image: FC<ImageProps> = ({ src, className, alt }) => (
    <figure className={cn("image", className)}>
        <img src={src} alt={alt} />
    </figure>
);

export default Image;
