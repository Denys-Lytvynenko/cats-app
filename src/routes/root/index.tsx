import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

import { routes } from "../routes";

import Card from "@components/Card";
import Typography from "@components/Typography";

import { ReactComponent as Logo } from "@assets/icons/logo.svg";
import galleryImg from "@assets/images/images-search.png";
import breedsImg from "@assets/images/pet-breeds.png";
import voteImg from "@assets/images/vote-table.png";

import "./styles.scss";

const Root: FC = () => {
    return (
        <div className="app">
            <div className="app__side-wrapper">
                <div className="app__navigation">
                    <header className="header">
                        <Link to={routes.home} className="header__logo">
                            <Logo />
                        </Link>
                        {/* TODO add dark mode button */}
                    </header>

                    <Typography tag="h1" className="app__title">
                        Hi intern!
                    </Typography>

                    <Typography tag="p" className="app__welcome-text">
                        Welcome to MI 2022 Front-end test
                    </Typography>

                    <Typography tag="h5" className="app__subtitle">
                        Lets start using The Cat API
                    </Typography>

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
                </div>
            </div>

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
