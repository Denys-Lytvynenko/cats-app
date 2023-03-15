import {
    MutableRefObject,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

export const useBlockHeight = (
    offsetBottom: number
): [MutableRefObject<HTMLDivElement | null>, number] => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(
            window.innerHeight - (ref.current?.offsetTop! + offsetBottom)
        );
    }, []);

    useEffect(() => {
        const changeHeight = () => {
            setHeight(
                window.innerHeight - (ref.current?.offsetTop! + offsetBottom)
            );
        };

        addEventListener("resize", changeHeight);

        return () => removeEventListener("resize", changeHeight);
    }, []);

    return [ref, height];
};
