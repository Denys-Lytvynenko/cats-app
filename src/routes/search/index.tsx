import { FC } from "react";
import { useParams } from "react-router-dom";

import ContentWrapper from "@components/ContentWrapper";
import GoBackButton from "@components/GoBackButton";
import SectionName from "@components/SectionName";
import SectionWrapper from "@components/SectionWrapper";
import Typography from "@components/Typography";

import "./styles.scss";

const Search: FC = () => {
    const { searchId } = useParams();

    return (
        <ContentWrapper>
            <SectionWrapper>
                <div className="search__top">
                    <GoBackButton />

                    <SectionName name />
                </div>

                <div className="search__description">
                    <Typography tag="p">Search results for:</Typography>

                    <Typography
                        tag="p"
                        color="black"
                        className="search__keyword"
                    >
                        {searchId}
                    </Typography>
                </div>
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Search;
