import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchImages } from "@store/slices/breedSlice";

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

    const { loading, description, sliderImages } = useAppSelector(
        state => state.breed
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!breedId) return;

        const signal = dispatch(fetchImages(breedId));

        return () => signal.abort("Abort fetchImages");
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
                            {description?.name && (
                                <Typography tag="h2" className="breed__name">
                                    {description.name}
                                </Typography>
                            )}

                            {description?.description && (
                                <Typography
                                    tag="p"
                                    className="breed__description"
                                >
                                    {description.description}
                                </Typography>
                            )}

                            <div className="breed__info">
                                {description?.temperament && (
                                    <div className="breed__info-column">
                                        <Typography
                                            tag="p"
                                            color="black"
                                            className="breed__row-name"
                                        >
                                            Temperament:
                                        </Typography>

                                        <Typography tag="p">
                                            {description?.temperament}
                                        </Typography>
                                    </div>
                                )}

                                <div className="breed__info-column">
                                    {description?.origin && (
                                        <div className="breed__params-row">
                                            <Typography
                                                tag="p"
                                                color="black"
                                                className="breed__row-name"
                                            >
                                                Origin:
                                            </Typography>

                                            <Typography tag="p">
                                                {description.origin}
                                            </Typography>
                                        </div>
                                    )}

                                    {description?.weight.metric && (
                                        <div className="breed__params-row">
                                            <Typography
                                                tag="p"
                                                color="black"
                                                className="breed__row-name"
                                            >
                                                Weight:
                                            </Typography>
                                            <Typography tag="p">
                                                {description.weight.metric}
                                            </Typography>
                                        </div>
                                    )}

                                    {description?.life_span && (
                                        <div className="breed__params-row">
                                            <Typography
                                                tag="p"
                                                color="black"
                                                className="breed__row-name"
                                            >
                                                Life span:
                                            </Typography>
                                            <Typography tag="p">
                                                {description.life_span}
                                            </Typography>
                                        </div>
                                    )}
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
