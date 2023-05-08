import { ChangeEvent, FC, useEffect, useState } from "react";

import { OptionsType } from "@components/Select/types";
import { useTiles } from "@hooks/useTiles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    fetchBreedsImages,
    fetchBreedsOptions,
} from "@store/slices/breedsSlice";
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

const limitOptions: OptionsType = [
    { name: "Limit: 5", value: "5" },
    { name: "Limit: 10", value: "10" },
    { name: "Limit: 15", value: "15" },
    { name: "Limit: 20", value: "20" },
];

const Breeds: FC = () => {
    const { breedsImages, breedsImagesLoading, breedsOptions } = useAppSelector(
        state => state.breeds
    );

    const dispatch = useAppDispatch();

    const [breedsValue, setBreedsValue] = useState<string>(
        breedsOptions[0].value
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

    useEffect(() => {
        const signal = dispatch(
            fetchBreedsImages({ orderValue, breedsValue, limitValue })
        );
        return () => signal.abort("Abort fetchBreedsImages");
    }, [limitValue, orderValue, breedsValue]);

    useEffect(() => {
        const signal = dispatch(fetchBreedsOptions());

        return () => signal.abort("Abort fetchBreedsOptions");
    }, []);

    const tiles = useTiles({ data: breedsImages, component: BreedsTile });

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

                <GalleryGrid tiles={tiles} loading={breedsImagesLoading} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breeds;
