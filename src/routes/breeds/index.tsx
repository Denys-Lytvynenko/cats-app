import { ChangeEvent, FC, useEffect, useState } from "react";

import { BreedsController } from "@api/breedsController";
import { ImagesController } from "@api/imagesController";
import { OptionsType } from "@components/Select/types";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";
import { orderOptions } from "../gallery";

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

const initialOptions: OptionsType = [{ name: "All breeds", value: "" }];

const limitOptions: OptionsType = [
    { name: "Limit: 5", value: "5" },
    { name: "Limit: 10", value: "10" },
    { name: "Limit: 15", value: "15" },
    { name: "Limit: 20", value: "20" },
];

const Breeds: FC = () => {
    const [breedsOptions, setBreedsOptions] =
        useState<OptionsType>(initialOptions);

    const [breedsValue, setBreedsValue] = useState<string>(
        initialOptions[0].value
    );
    const onBreedsChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setBreedsValue(event.target.value);

    const [limitValue, setLimitValue] = useState<string>(limitOptions[0].value);
    const onLimitChange = (event: ChangeEvent<HTMLSelectElement>) =>
        setLimitValue(event.target.value);

    const [orderValue, setOrderValue] = useState<string>(orderOptions[0].value);
    const onChangeOrder = (order: "asc" | "desc") => {
        orderValue === order ? setOrderValue("random") : setOrderValue(order);
    };

    const [loading, setLoading] = useState<boolean>(true);
    const [breeds, setBreeds] = useState<UseTilesDataType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getBreedsImages = async () => {
            try {
                setLoading(true);

                const queryParams = new String().concat(
                    `&order=${orderValue}`,
                    breedsValue ? `&breed_ids=${breedsValue}` : "",
                    "&has_breeds=true"
                );

                const breedsImages =
                    await ImagesController.getInstance().getImages({
                        limit: limitValue,
                        page: "0",
                        queryParams,
                        signal: abortController.signal,
                    });

                if (breedsImages) {
                    const actualData: UseTilesDataType[] = breedsImages
                        .filter(item => item.breeds.length)
                        .map(({ id, url, breeds }) => ({
                            id,
                            image: url,
                            href: id,
                            name: breeds[0].name,
                        }));

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

        getBreedsImages();

        return () => abortController.abort();
    }, [limitValue, orderValue, breedsValue]);

    useEffect(() => {
        const abortController = new AbortController();

        // Fetch breeds select options from the API
        const getBreedsOptions = async () => {
            try {
                const allBreeds =
                    await BreedsController.getInstance().getBreeds();

                if (allBreeds) {
                    const breedsOpt = allBreeds
                        .map(({ id, name }) => ({
                            name,
                            value: id,
                        }))
                        .filter(item => item.name && item.value);

                    breedsOpt.unshift(initialOptions[0]);

                    // Remove duplicated options
                    const filteredOpt = breedsOpt.filter(
                        (item, index, self) =>
                            index ===
                            self.findIndex(
                                t =>
                                    t?.value === item?.value &&
                                    t?.name === item?.name
                            )
                    );

                    setBreedsOptions(filteredOpt);
                } else {
                    setBreedsOptions(initialOptions);
                }
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request canceled by the user");
                } else {
                    console.error("Get breeds options error: ", error);
                    setBreedsOptions(initialOptions);
                }
            }
        };

        getBreedsOptions();

        return () => abortController.abort();
    }, []);

    const tiles = useTiles({ data: breeds, component: BreedsTile });

    return (
        <ContentWrapper>
            <SectionWrapper className="breeds">
                <SectionTop>
                    <Select
                        name="breeds-type"
                        title="breeds type select"
                        accentColor="gray"
                        options={breedsOptions}
                        value={breedsValue}
                        onChange={onBreedsChange}
                        className="breeds__type-select"
                    />

                    <Select
                        name="limit"
                        title="limit of item per page"
                        accentColor="gray"
                        value={limitValue}
                        onChange={onLimitChange}
                        options={limitOptions}
                    />

                    <SortingButton
                        icon={<SortZAIcon />}
                        isActive={orderValue === "desc"}
                        onClick={() => onChangeOrder("desc")}
                        ariaLabel="sort from z to a"
                    />

                    <SortingButton
                        icon={<SortAZIcon />}
                        isActive={orderValue === "asc"}
                        onClick={() => onChangeOrder("asc")}
                        ariaLabel="sort form a to z"
                    />
                </SectionTop>

                <GalleryGrid tiles={tiles} loading={loading} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breeds;
