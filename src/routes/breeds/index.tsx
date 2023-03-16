import { FC } from "react";

import SectionTop from "@components/SectionTop";
import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionWrapper from "@components/SectionWrapper";
import Select from "@components/Select";
import SortingButton from "@components/SortingButton";
import BreedsTile from "./BreedsTile";

import { ReactComponent as SortAZIcon } from "@assets/icons/sorting_a-z.svg";
import { ReactComponent as SortZAIcon } from "@assets/icons/sorting_z-a.svg";

import "./styles.scss";

const Breeds: FC = () => {
    return (
        <ContentWrapper>
            <SectionWrapper className="breeds">
                <SectionTop>
                    <Select
                        name="breeds-type"
                        title="breeds type select"
                        accentColor="gray"
                        options={[{ value: "All breeds" }]}
                        className="breeds__type-select"
                    />

                    <Select
                        name="limit"
                        title="limit of item per page"
                        accentColor="gray"
                        options={[{ value: "Limit: 5" }]}
                    />

                    <SortingButton
                        icon={<SortZAIcon />}
                        onClick={() => {}}
                        ariaLabel="sort from z to a"
                    />

                    <SortingButton
                        icon={<SortAZIcon />}
                        onClick={() => {}}
                        ariaLabel="sort form a to z"
                    />
                </SectionTop>

                <GalleryGrid tileComponent={BreedsTile} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breeds;
