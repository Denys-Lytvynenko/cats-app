import { FC, useState } from "react";

import { cn } from "@utils/classNames";
import { ImageProps } from "./types";

import "./styles.scss";
import Loader from "../Loader";

const Image: FC<ImageProps> = ({ src, className, alt, style }) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const onLoad = () => setLoaded(true);

    return (
        <figure className={cn("image", className)} style={style}>
            {!loaded && <Loader />}

            <img
                src={src}
                alt={alt}
                onLoad={onLoad}
                style={loaded ? {} : { display: "none" }}
            />
        </figure>
    );
};

export default Image;
