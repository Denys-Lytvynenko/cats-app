import { ReactElement } from "react";

export interface SortingButtonProps {
    icon: ReactElement;
    onClick: () => void;
    ariaLabel: string;
    className?: string;
}
