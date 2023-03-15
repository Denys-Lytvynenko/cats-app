import { FC, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { cn } from "@utils/classNames";
import { SectionNameProps } from "./types";

import "./styles.scss";

const SectionName: FC<SectionNameProps> = ({
    name,
    id,
    className,
    children,
}) => {
    const [isActive, setIsActive] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    const { pathname } = useLocation();
    const params = useParams();

    useLayoutEffect(() => {
        !ref.current?.nextElementSibling?.classList.contains("section-name")
            ? setIsActive("active")
            : setIsActive("");
    }, []);

    const pageName = name ? pathname.split("/")[1] : "";
    const pageId = id ? params?.breedId! : "";

    return (
        <div ref={ref} className={cn("section-name", isActive, className)}>
            {children ? children : pageName || pageId}
        </div>
    );
};
export default SectionName;
