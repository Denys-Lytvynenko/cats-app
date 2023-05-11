import { FC } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";
import { useAppSelector } from "@store/hooks";
import { GalleryGridProps } from "./types";

import ItemNotFound from "../ItemNotFound";
import Loader from "../Loader";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({ tiles, loading }) => {
    const isTablet = useAppSelector(state => state.mobile.isTablet);
    const [galleryRef, height] = useBlockHeight(isTablet ? 40 : 50);

    return (
        <div
            className="gallery"
            style={{ height: isTablet ? "100%" : height }}
            ref={galleryRef}
        >
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
