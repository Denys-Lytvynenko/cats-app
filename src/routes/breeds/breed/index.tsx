import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreedType } from "@api/breedsController/types";
import { ImagesController } from "@api/imagesController";

import ContentWrapper from "@components/ContentWrapper";
import Loader from "@components/Loader";
import SectionName from "@components/SectionName";
import SectionTop from "@components/SectionTop";
import SectionWrapper from "@components/SectionWrapper";
import Slider from "@components/Slider";
import Typography from "@components/Typography";

import cat from "@assets/images/cat.png";

import "./styles.scss";

const Breed: FC = () => {
    const { breedId } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [descriptionBlockData, setDescriptionBlockData] =
        useState<BreedType | null>(null);
    const [sliderImages, setSliderImages] = useState<string[] | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const getImages = async (imageId: string) => {
            try {
                setLoading(true);

                const image = await ImagesController.getInstance().getImage(
                    imageId,
                    abortController.signal
                );

                if (image) {
                    setDescriptionBlockData(image.breeds[0]);

                    const images =
                        await ImagesController.getInstance().getSimilarImages(
                            image.breeds[0].id,
                            "10",
                            abortController.signal
                        );

                    if (images) {
                        const actualData = images.map(({ url }) => url);

                        setSliderImages(actualData);
                    } else {
                        setSliderImages(null);
                    }
                } else {
                    setDescriptionBlockData(null);
                }

                setLoading(false);
            } catch (error) {
                if (abortController.signal.aborted) {
                    console.log("Request canceled by the user");
                } else {
                    console.error("Get images error: ", error);
                    setLoading(false);
                    setDescriptionBlockData(null);
                }
            }
        };

        if (!breedId) return;
        getImages(breedId);

        return () => abortController.abort();
    }, [breedId]);

    return (
        <ContentWrapper>
            <SectionWrapper className="breeds">
                <SectionTop>
                    <SectionName id />
                </SectionTop>

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Slider images={sliderImages || [cat]} />

                        <div className="breed__info-block">
                            <Typography tag="h2" className="breed__name">
                                {descriptionBlockData?.name}
                            </Typography>

                            <Typography tag="p" className="breed__description">
                                {descriptionBlockData?.description}
                            </Typography>

                            <div className="breed__info">
                                <div className="breed__info-column">
                                    <Typography
                                        tag="p"
                                        color="black"
                                        className="breed__row-name"
                                    >
                                        Temperament:
                                    </Typography>

                                    <Typography tag="p">
                                        {descriptionBlockData?.temperament}
                                    </Typography>
                                </div>

                                <div className="breed__info-column">
                                    <div className="breed__params-row">
                                        <Typography
                                            tag="p"
                                            color="black"
                                            className="breed__row-name"
                                        >
                                            Origin:
                                        </Typography>

                                        <Typography tag="p">
                                            {descriptionBlockData?.origin}
                                        </Typography>
                                    </div>

                                    <div className="breed__params-row">
                                        <Typography
                                            tag="p"
                                            color="black"
                                            className="breed__row-name"
                                        >
                                            Weight:
                                        </Typography>
                                        <Typography tag="p">
                                            {
                                                descriptionBlockData?.weight
                                                    .metric
                                            }
                                        </Typography>
                                    </div>

                                    <div className="breed__params-row">
                                        <Typography
                                            tag="p"
                                            color="black"
                                            className="breed__row-name"
                                        >
                                            Life span:
                                        </Typography>
                                        <Typography tag="p">
                                            {descriptionBlockData?.life_span}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </SectionWrapper>
        </ContentWrapper>
    );
};

export default Breed;
