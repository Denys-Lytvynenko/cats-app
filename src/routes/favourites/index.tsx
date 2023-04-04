import { FC, useEffect, useState } from "react";

import { FavouritesController } from "@api/favouritesController";
import { useTiles } from "@hooks/useTiles";
import { UseTilesDataType } from "@hooks/useTiles/types";

import ContentWrapper from "@components/ContentWrapper";
import GalleryGrid from "@components/GalleryGrid";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import GalleryRouteTile from "../gallery/GalleryRouteTile";

const Favourites: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<UseTilesDataType[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getFavourites = async () => {
            try {
                setIsLoading(true);

                const favourites =
                    await FavouritesController.getInstance().getFavourites(
                        abortController.signal
                    );

                if (favourites) {
                    const actualData: UseTilesDataType[] = favourites.map(
                        ({ image: { id, url } }) => ({ id, image: url })
                    );

                    setData(actualData);
                } else {
                    setData(null);
                }

                setIsLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request aborted by the user");
                } else {
                    console.error("Get favourites error", error);
                    setData(null);
                    setIsLoading(false);
                }
            }
        };

        getFavourites();
        return () => abortController.abort();
    }, []);

    const tiles = useTiles({ data, component: GalleryRouteTile });

    return (
        <ContentWrapper>
            <SectionWrapper>
                <SectionTop />

                <GalleryGrid loading={isLoading} tiles={tiles} />
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Favourites;
