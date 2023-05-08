import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreedsController } from "@api/breedsController";
import { ImagesController } from "@api/imagesController";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";
import { routes } from "../routes";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Typography from "@components/Typography";
import BreedsTile from "../breeds/BreedsTile";

import "./styles.scss";

const Search: FC = () => {
    const { searchId } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<UseTilesDataType | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getSearchImages = async () => {
            try {
                setLoading(true);

                const breeds = await BreedsController.getInstance().getBreeds(
                    "",
                    "0",
                    abortController.signal
                );

                if (breeds && searchId) {
                    const filteredData = breeds.filter(({ name }) =>
                        name
                            .toLowerCase()
                            .includes(searchId.toLocaleLowerCase())
                    );

                    if (filteredData[0]) {
                        const queryParams = new String().concat(
                            filteredData[0]?.id
                                ? `&breed_ids=${filteredData[0].id}`
                                : ""
                        );

                        const images =
                            await ImagesController.getInstance().getImages({
                                limit: "100",
                                page: "0",
                                queryParams,
                                signal: abortController.signal,
                            });

                        const searchData: UseTilesDataType = images.map(
                            ({ breeds, id, url }) => ({
                                id,
                                image: url,
                                name: breeds[0].name,
                                href: `${routes.breeds}/${id}`,
                            })
                        );

                        setData(searchData);
                    } else {
                        setData(null);
                    }
                } else {
                    setData(null);
                }

                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request aborted by the user");
                } else {
                    console.error("Get search images error: ", error);
                    setData(null);
                    setLoading(false);
                }
            }
        };

        getSearchImages();

        return () => abortController.abort();
    }, [searchId]);

    const tiles = useTiles({ data, component: BreedsTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

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

                <GalleryGrid loading={loading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Search;
