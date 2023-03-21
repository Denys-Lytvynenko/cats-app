import { ChangeEvent } from "react";

export interface SelectProps {
    name: string;
    title: string;
    options: { value: string; name: string }[];
    value: any;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    accentColor?: "gray";
    className?: string;
}
