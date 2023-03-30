import { ChangeEvent } from "react";

export type OptionsType = { value: string; name: string }[];
export interface SelectProps {
    name: string;
    title: string;
    options: OptionsType;
    value: any;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    accentColor?: "gray";
    className?: string;
}
