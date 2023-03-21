import { ChangeEvent, FC, createRef, useState } from "react";

import useFetch from "@hooks/useFetch";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Select from "@components/Select";
import SortingButton from "@components/SortingButton";
import BreedsTile from "./BreedsTile";

import { ReactComponent as SortAZIcon } from "@assets/icons/sorting_a-z.svg";
import { ReactComponent as SortZAIcon } from "@assets/icons/sorting_z-a.svg";

import "./styles.scss";
import { BreedType } from "../../utils/api/types";

const limitOptions = [
    { name: "Limit: 5", value: "5" },
    { name: "Limit: 10", value: "10" },
    { name: "Limit: 15", value: "15" },
    { name: "Limit: 20", value: "20" },
];

const Breeds: FC = () => {
    const [breedsType, setBreedsType] = useState<string>("");
    const changeBreedsTypeHandler = (event: ChangeEvent<HTMLSelectElement>) =>
        setBreedsType(event.target.value);

    const [limit, setLimit] = useState<string>("5");
    const changeLimitHandler = (event: ChangeEvent<HTMLSelectElement>) =>
        setLimit(event.target.value);

    const [loading, breeds] = useFetch<BreedType[]>(
        `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`
    );

    return (
        <ContentWrapper>
            <SectionWrapper className="breeds">
                <SectionTop>
                    <Select
                        name="breeds-type"
                        title="breeds type select"
                        accentColor="gray"
                        options={[{ name: "All breeds", value: "All breeds" }]}
                        value={breedsType}
                        onChange={changeBreedsTypeHandler}
                        className="breeds__type-select"
                    />

                    <Select
                        name="limit"
                        title="limit of item per page"
                        accentColor="gray"
                        value={limit}
                        onChange={changeLimitHandler}
                        options={limitOptions}
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

                <GalleryGrid
                    tileComponent={BreedsTile}
                    data={breeds}
                    loading={loading}
                />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breeds;
