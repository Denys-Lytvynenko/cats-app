import { FC } from "react";

import { useBlockHeight } from "@hooks/useBlockHeight";

import SectionTop from "@components/SectionTop";
import ContentWrapper from "@components/ContentWrapper";
import Image from "@components/Image";
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
                <SectionTop />

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
