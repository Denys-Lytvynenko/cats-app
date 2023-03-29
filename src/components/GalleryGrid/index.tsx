import { FC } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";
import { GalleryGridProps } from "./types";

import ItemNotFound from "../ItemNotFound";
import Loader from "../Loader";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({ tiles, loading }) => {
    const [galleryRef, height] = useBlockHeight(52);

    return (
        <div className="gallery" style={{ height }} ref={galleryRef}>
            {loading ? (
                <Loader />
            ) : !tiles && !loading ? (
                <ItemNotFound />
            ) : (
                tiles
            )}
        </div>
    );
};

export default GalleryGrid;
