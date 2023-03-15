import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import GoBackButton from "@components/GoBackButton";
import SectionName from "@components/SectionName";
import SectionWrapper from "@components/SectionWrapper";
import Slider from "@components/Slider";

import cat from "@assets/images/cat.png";

// import "./styles.scss";

const cats = [cat, cat, cat];

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
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breed;
