import { FC, useMemo } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";
import { GalleryGridProps } from "./types";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({ tileComponent: Tile }) => {
    const [galleryRef, height] = useBlockHeight(52);

    // add real data
    const tiles = useMemo(() => {
        const data = Array(13);

        let rows = [];
        let row = [];

        for (let i = 1; i <= data.length; i++) {
            row.push(<Tile key={i} href="#" image={cat} name="cat" />);

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

    return (
        <div className="gallery" style={{ height }} ref={galleryRef}>
            {tiles}
        </div>
    );
};

export default GalleryGrid;
