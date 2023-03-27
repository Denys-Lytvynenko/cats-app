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

    return (
        <div
            ref={sliderRef}
            className="slider"
            style={{ height: sliderHeight }}
        >
            <div className="slider__wrapper">
                <div
                    ref={slidesContainerRef}
                    className="slider__slides-container"
                    style={{ left }}
                >
                    {slides}
                </div>
            </div>

            <div className="slider__navigation">{controls}</div>
        </div>
    );
};

export default Slider;
