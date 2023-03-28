import { ChangeEvent, FC, useEffect, useState } from "react";

import { BreedsController } from "@api/breedsController";
import { OptionsType } from "@components/Select/types";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";

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

const limitOptions: OptionsType = [
    { name: "Limit: 5", value: "5" },
    { name: "Limit: 10", value: "10" },
    { name: "Limit: 15", value: "15" },
    { name: "Limit: 20", value: "20" },
];

const Breeds: FC = () => {
    const [breedsType, setBreedsType] = useState<string>("");
    const changeBreedsTypeHandler = (event: ChangeEvent<HTMLSelectElement>) =>
        setBreedsType(event.target.value);

    const [limit, setLimit] = useState<string>(limitOptions[0].value);
    const changeLimitHandler = (event: ChangeEvent<HTMLSelectElement>) =>
        setLimit(event.target.value);

    const [loading, setLoading] = useState<boolean>(true);
    const [breeds, setBreeds] = useState<UseTilesDataType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getBreeds = async () => {
            try {
                setLoading(true);
                const data = await BreedsController.getInstance().getBreeds(
                    limit,
                    "0",
                    abortController.signal
                );

                if (data) {
                    const actualData: UseTilesDataType[] = data.map(
                        ({ name, image: { id, url } }) => ({
                            id,
                            image: url,
                            href: id,
                            name,
                        })
                    );

                    setBreeds(actualData);
                } else {
                    setBreeds(null);
                }

                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request aborted by the user");
                } else {
                    console.error("Get breeds error: ", error);
                    setLoading(false);
                }
            }
        };

        getBreeds();

        return () => abortController.abort();
    }, [limit]);

    const tiles = useTiles({ data: breeds, component: BreedsTile });

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

                <GalleryGrid tiles={tiles} loading={loading} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breeds;
