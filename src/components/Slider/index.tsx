import {
    FC,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { SliderProps } from "./types";

import Image from "../Image";

import "./styles.scss";
import { cn } from "../../utils/classNames";

const Slider: FC<SliderProps> = ({ images }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const [slideWidth, setSlideWidth] = useState<number | undefined>(0);
    const [sliderHeight, setSliderHeight] = useState<number | undefined>(0);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useLayoutEffect(() => {
        setSlideWidth(prev => sliderRef.current?.offsetWidth);
        setSliderHeight(prev => slidesContainerRef.current?.offsetHeight);
    }, []);

    useEffect(() => {
        const handler = () => {
            setSlideWidth(prev => sliderRef.current?.offsetWidth);
            setSliderHeight(prev => slidesContainerRef.current?.offsetHeight);
        };

        addEventListener("resize", handler);

        return () => removeEventListener("resize", handler);
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
    }, [slideWidth]);

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

    console.log(currentSlide);

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
                >
                    {slides}
                </div>
            </div>

            <div className="slider__navigation">{controls}</div>
        </div>
    );
};

export default Slider;
