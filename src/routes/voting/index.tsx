import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import SectionWrapper from "@components/SectionWrapper";
import GoBackButton from "@components/GoBackButton";
import SectionName from "@components/SectionName";
import Image from "@components/Image";

import image from "@assets/images/cat.png";

import "./styles.scss";
import VotingButtonsGroup from "./VotingButtonsGroup";

const Voting: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper className="voting__wrapper">
                <div className="voting__top">
                    <GoBackButton />

                    <SectionName />
                </div>

                <div className="voting__image-wrapper">
                    <Image src={image} alt="cat" />

                    <VotingButtonsGroup />
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
