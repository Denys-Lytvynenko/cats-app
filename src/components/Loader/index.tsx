import { FC } from "react";

import { cn } from "@utils/classNames";
import { LoaderProps } from "./types";

import { ReactComponent as LoaderIcon } from "@assets/icons/loader.svg";

import "./styles.scss";

const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={cn("loader", className)}>
        <LoaderIcon />
    </div>
);

export default Loader;
