import { FC } from "react";

import homeImg from "@assets/images/girl-and-pet.png";

import "./style.scss";

const Home: FC = () => (
    <div className="home">
        <div className="home__bg-block" />
        <img src={homeImg} alt="girl and pet" className="home__image" />
    </div>
);

export default Home;
