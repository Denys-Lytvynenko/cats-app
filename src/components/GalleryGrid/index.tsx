import {
    FC,
    MutableRefObject,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { GalleryGridProps } from "./types";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const useGalleryGridHeight = (
    offsetBottom: number
): [MutableRefObject<HTMLDivElement | null>, number] => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(
            window.innerHeight - (ref.current?.offsetTop! + offsetBottom)
        );
    }, []);

    useEffect(() => {
        const changeHeight = () => {
            setHeight(
                window.innerHeight - (ref.current?.offsetTop! + offsetBottom)
            );
        };

        addEventListener("resize", changeHeight);

        return () => removeEventListener("resize", changeHeight);
    }, []);

    return [ref, height];
};

const GalleryGrid: FC<GalleryGridProps> = ({ tileComponent: Tile }) => {
    const [galleryRef, height] = useGalleryGridHeight(52);

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
