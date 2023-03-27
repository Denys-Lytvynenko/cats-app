import { FC } from "react";

export interface UseTilesDataType {
    id?: string;
    image?: string;
    href?: string;
    name?: string;
}

export interface UseTilesProps {
    data: UseTilesDataType[] | null;
    component: FC;
}
