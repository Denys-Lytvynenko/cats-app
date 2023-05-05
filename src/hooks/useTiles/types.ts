import { FC } from "react";

export type UseTilesDataType = {
    href?: string;
    id?: string;
    image?: string;
    name?: string;
}[];

export interface UseTilesProps {
    component: FC;
    data: UseTilesDataType | null;
}
