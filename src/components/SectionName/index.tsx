import { FC } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@utils/classNames";
import { SectionNameProps } from "./types";

import "./styles.scss";

const SectionName: FC<SectionNameProps> = ({ className, children }) => {
    const { pathname } = useLocation();

    return (
        <div className={cn("section-name", className)}>
            {children ? children : pathname.replaceAll("/", "")}
        </div>
    );
};
export default SectionName;
