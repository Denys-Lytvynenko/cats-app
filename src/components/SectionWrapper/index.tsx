import { FC } from "react";

import { cn } from "@utils/classNames";
import { SectionWrapperProps } from "./types";

import "./styles.scss";

const SectionWrapper: FC<SectionWrapperProps> = ({ className, children }) => (
    <div className={cn("section-wrapper", className)}>{children}</div>
);

export default SectionWrapper;
