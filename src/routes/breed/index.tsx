import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import GoBackButton from "@components/GoBackButton";
import SectionName from "@components/SectionName";
import SectionWrapper from "@components/SectionWrapper";
import Slider from "@components/Slider";
import Typography from "@components/Typography";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const cats = [cat, cat, cat, cat, cat, cat];

const Breed: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper className="breeds">
                <div className="breeds__top">
                    <GoBackButton />

                    <SectionName name />
                    <SectionName id />
                </div>

                <Slider images={cats} />

                <div className="breed__info-block">
                    <Typography tag="h2" className="breed__name">
                        Basenji
                    </Typography>

                    <Typography tag="p" className="breed__description">
                        Family companion cat
                    </Typography>

                    <div className="breed__info">
                        <div className="breed__info-column">
                            <Typography
                                tag="p"
                                color="black"
                                className="breed__row-name"
                            >
                                Temperament:
                            </Typography>

                            <Typography tag="p">
                                Active, Energetic, Independent, Intelligent,
                                Gentle
                            </Typography>
                        </div>

                        <div className="breed__info-column">
                            <div className="breed__params-row">
                                <Typography
                                    tag="p"
                                    color="black"
                                    className="breed__row-name"
                                >
                                    Origin:
                                </Typography>
                                <Typography tag="p">United States</Typography>
                            </div>

                            <div className="breed__params-row">
                                <Typography
                                    tag="p"
                                    color="black"
                                    className="breed__row-name"
                                >
                                    Weight:
                                </Typography>
                                <Typography tag="p">3 - 5 kg</Typography>
                            </div>

                            <div className="breed__params-row">
                                <Typography
                                    tag="p"
                                    color="black"
                                    className="breed__row-name"
                                >
                                    Life span:
                                </Typography>
                                <Typography tag="p">14 - 15 years</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breed;
