import { FC } from "react";

import { cn } from "@utils/classNames";
import { SectionTopProps } from "./types";

import GoBackButton from "../GoBackButton";
import SectionName from "../SectionName";

import "./styles.scss";

const SectionTop: FC<SectionTopProps> = ({ className, children }) => (
    <div className={cn("section__top", className)}>
        <GoBackButton />

        <SectionName name />

        {children}
    </div>
);

export default SectionTop;
