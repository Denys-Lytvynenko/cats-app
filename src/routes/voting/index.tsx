import { FC } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";

import ContentWrapper from "@components/ContentWrapper";
import GoBackButton from "@components/GoBackButton";
import Image from "@components/Image";
import SectionName from "@components/SectionName";
import SectionWrapper from "@components/SectionWrapper";
import VotingButtonsGroup from "./VotingButtonsGroup";
import VotingMessage from "./VotingMessage";

import image from "@assets/images/cat.png";

import "./styles.scss";

const Voting: FC = () => {
    const [messagesBlockRef, height] = useBlockHeight(52);

    return (
        <ContentWrapper>
            <SectionWrapper>
                <div className="voting__top">
                    <GoBackButton />

                    <SectionName />
                </div>

                <div className="voting__image-wrapper">
                    <Image src={image} alt="cat" />

                    <VotingButtonsGroup />
                </div>

                <div
                    ref={messagesBlockRef}
                    style={{ height }}
                    className="voting__messages-wrapper"
                >
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="like"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="dislike"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="favourite"
                    />
                    <VotingMessage
                        time="20:00"
                        imageId="fQSunHvl8"
                        reaction="remove"
                    />
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Voting;
