import { FC, useMemo } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";
import { GalleryGridProps } from "./types";

import ItemNotFound from "../ItemNotFound";
import Loader from "../Loader";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({
    tileComponent: Tile,
    data,
    loading,
}) => {
    const [galleryRef, height] = useBlockHeight(52);

    // add real data
    const tiles = useMemo(() => {
        if (!data || !data.length) return;

        let row = [];
        let rows = [];

        for (let i = 0; i < data.length; i++) {
            row.push(
                <Tile
                    key={data[i]?.id + i.toString()}
                    href={data[i]?.id}
                    image={data[i]?.image.url}
                    name={data[i]?.name}
                />
            );

            if (row.length === 5 || i === data.length - 1) {
                rows.push(
                    <div key={rows.length} className="gallery__wrapper">
                        {row}
                    </div>
                );

                row = [];
            }
        }

        return rows;
    }, [data]);

    return (
        <div className="gallery" style={{ height }} ref={galleryRef}>
            {loading && <Loader />}

            {!tiles && !loading ? <ItemNotFound /> : tiles}
        </div>
    );
};

export default GalleryGrid;
