export interface SelectProps {
    name: string;
    title: string;
    options: { value: string }[];
    label?: string;
    accentColor?: "gray";
    className?: string;
}
