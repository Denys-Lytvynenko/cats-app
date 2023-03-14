import { FC } from "react";

import ContentWrapper from "@components/ContentWrapper";
import SectionWrapper from "@components/SectionWrapper";
import GoBackButton from "@components/GoBackButton";
import SectionName from "@components/SectionName";
import Image from "@components/Image";

import image from "@assets/images/cat.png";

import "./styles.scss";

const Voting: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper>
                <div className="voting__top">
                    <GoBackButton />

                    <SectionName />
                </div>

                <Image src={image} alt="cat" />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
