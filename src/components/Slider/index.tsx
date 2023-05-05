import {
    FC,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { cn } from "@utils/classNames";
import { SliderProps } from "./types";

import Image from "../Image";

import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";

import "./styles.scss";

const Slider: FC<SliderProps> = ({ images }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const [slideWidth, setSlideWidth] = useState<number | undefined>(0);
    const [sliderHeight, setSliderHeight] = useState<number | undefined>(0);
    const [sliderContainerWidth, setSliderContainerWidth] = useState<number>(0);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Set slider size
    const sizeHandler = () => {
        setSlideWidth(prev => sliderRef.current?.offsetWidth);
        setSliderHeight(prev => slidesContainerRef.current?.offsetHeight);
        setSliderContainerWidth(
            prev => slidesContainerRef.current?.offsetWidth!
        );
    };
    useLayoutEffect(sizeHandler, [slideWidth]);

    useEffect(() => {
        addEventListener("resize", sizeHandler);

        return () => removeEventListener("resize", sizeHandler);
    }, []);

    const slides = useMemo(() => {
        return images.map((img, index) => (
            <Image
                src={img}
                key={index}
                className="slider__slide"
                style={{ width: slideWidth }}
            />
        ));
    }, [images, slideWidth]);

    const controls = useMemo(() => {
        return images.map((img, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                    "slider__button",
                    currentSlide === index ? "active" : ""
                )}
            />
        ));
    }, [currentSlide]);

    const left = -(
        ((sliderContainerWidth - 20 * (images.length - 1)) / images.length +
            20) *
        currentSlide
    );

    const ifFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === images.length - 1;

    const goPrev = () => !ifFirstSlide && setCurrentSlide(prev => prev - 1);
    const goNext = () => !isLastSlide && setCurrentSlide(prev => prev + 1);

    return (
        <div
            className="slider"
            ref={sliderRef}
            style={{ height: sliderHeight }}
        >
            <div className="slider__wrapper">
                {!ifFirstSlide && (
                    <button
                        className="slider__navigation-button prev"
                        onClick={goPrev}
                        title="prev slide button"
                    >
                        <ArrowLeft />
                    </button>
                )}

                <div
                    className="slider__slides-container"
                    ref={slidesContainerRef}
                    style={{ left }}
                >
                    {slides}
                </div>

                {!isLastSlide && (
                    <button
                        className="slider__navigation-button next"
                        onClick={goNext}
                        title="next slide button"
                    >
                        <ArrowLeft />
                    </button>
                )}
            </div>

            <div className="slider__navigation">{controls}</div>
        </div>
    );
};

export default Slider;
