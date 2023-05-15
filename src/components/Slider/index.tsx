import {
    FC,
    TouchEvent,
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
    const [sliderContainerWidth, setSliderContainerWidth] = useState<number>(0);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Set slider size
    const sizeHandler = () => {
        setSlideWidth(sliderRef.current?.offsetWidth);
        setSliderContainerWidth(
            slidesContainerRef.current?.offsetWidth
                ? slidesContainerRef.current?.offsetWidth
                : 0
        );
    };

    useLayoutEffect(() => {
        sizeHandler();
        return () => sizeHandler();
    }, [slideWidth]);

    useEffect(() => {
        addEventListener("resize", sizeHandler);

        return () => removeEventListener("resize", sizeHandler);
    }, []);

    // Create slides
    const slides = useMemo(() => {
        return images.map((img, index) => (
            <Image
                src={img}
                key={index}
                className="slider__slide"
                style={{
                    width: slideWidth,
                    height: `calc(${slideWidth}px / 1.7777)`,
                }}
            />
        ));
    }, [images, slideWidth]);

    // Change slides on click on control and prev/next buttons
    const controls = useMemo(() => {
        return images.map((_, index) => (
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

    // Change slides on swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = useRef(100);

    const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientX);
    };

    const onTouchMove = (event: TouchEvent<HTMLDivElement>) =>
        setTouchEnd(event.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const swipeDistance = touchStart - touchEnd;

        if (swipeDistance > minSwipeDistance.current) {
            goNext();
        } else if (swipeDistance < -minSwipeDistance.current) {
            goPrev();
        }
    };

    return (
        <div className="slider" ref={sliderRef}>
            <div
                className="slider__wrapper"
                style={{
                    height: `calc(${slideWidth}px / 1.7777)`,
                }}
            >
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
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
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
