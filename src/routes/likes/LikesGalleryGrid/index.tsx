import { FC, useMemo } from "react";

import { LikesGalleryGridProps } from "./types";

import GalleryGrid from "@components/GalleryGrid";
import GalleryTile from "@components/GalleryTile";

const LikesGalleryGrid: FC<LikesGalleryGridProps> = ({ loading, data }) => {
    const tiles = useMemo(() => {
        if (!data || !data.length) return null;

        let row = [];
        let rows = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].image.url) {
                row.push(
                    <GalleryTile
                        key={data[i].id + i.toString()}
                        image={data[i].image.url}
                        name={data[i].image_id}
                    />
                );
            }

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

    return <GalleryGrid loading={loading} tiles={tiles} />;
};

export default LikesGalleryGrid;
