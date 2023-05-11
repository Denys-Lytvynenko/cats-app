import { FC } from "react";

import { routes } from "@routes/routes";

import Card from "../Card";

import galleryImg from "@assets/images/images-search.png";
import breedsImg from "@assets/images/pet-breeds.png";
import voteImg from "@assets/images/vote-table.png";

import "./styles.scss";

const NavigationCards: FC = () => {
    return (
        <div className="cards">
            <Card
                name="voting"
                href={routes.voting}
                image={voteImg}
                backgroundColor="#B4B7FF"
            />
            <Card
                name="breeds"
                href={routes.breeds}
                image={breedsImg}
                backgroundColor="#97EAB9"
            />
            <Card
                name="gallery"
                href={routes.gallery}
                image={galleryImg}
                backgroundColor="#FFD280"
            />
        </div>
    );
};

export default NavigationCards;
