import { ReactElement } from "react";

export interface SortingButtonProps {
    ariaLabel: string;
    icon: ReactElement;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}
