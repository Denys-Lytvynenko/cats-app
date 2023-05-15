import { FC } from "react";

import { cn } from "@utils/classNames";
import { GalleryGridProps } from "./types";

import ItemNotFound from "../ItemNotFound";
import Loader from "../Loader";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({ tiles, loading, className }) => (
    <div className={cn("gallery", className)}>
        {loading ? <Loader /> : !tiles && !loading ? <ItemNotFound /> : tiles}
    </div>
);

export default GalleryGrid;
