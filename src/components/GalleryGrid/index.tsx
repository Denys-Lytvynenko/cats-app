import React, { FC, useMemo } from "react";

import { GalleryGridProps } from "./types";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const GalleryGrid: FC<GalleryGridProps> = ({}) => {
    const tiles = useMemo(() => {
        const data = Array(15);

        let items = [];
        let test = [];

        for (let i = 1; i <= data.length; i++) {
            test.push(i);

            if (i % 5 === 0) {
                items.push(test);
                test = [];
            }
        }

        return items;
    }, []);

    console.log(tiles);

    return (
        <div className="gallery">
            <div className="gallery__wrapper">
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
            </div>
            <div className="gallery__wrapper">
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
            </div>
            <div className="gallery__wrapper">
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
                <figure className="gallery__item">
                    <img src={cat} className="gallery__image" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default GalleryGrid;
