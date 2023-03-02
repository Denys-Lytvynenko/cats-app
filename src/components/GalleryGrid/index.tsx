import { FC, useMemo } from "react";

import { GalleryGridProps } from "./types";

import GalleryTile from "../GalleryTile";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({}) => {
    const tiles = useMemo(() => {
        const data = Array(13);

        let rows = [];
        let row = [];

        for (let i = 1; i <= data.length; i++) {
            row.push(
                <GalleryTile
                    key={i}
                    href="#"
                    image={cat}
                    name="cat"
                    className="gallery__item"
                />
            );

            if (i % 5 === 0) {
                rows.push(
                    <div key={rows.length} className="gallery__wrapper">
                        {row}
                    </div>
                );
                row = [];
            }

            if (i === data.length) {
                rows.push(
                    <div key={rows.length} className="gallery__wrapper">
                        {row}
                    </div>
                );
            }
        }

        return rows;
    }, []);

    return <div className="gallery">{tiles}</div>;
};

export default GalleryGrid;
