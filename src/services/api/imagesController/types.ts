import { BreedType } from "@api/breedsController/types";

export interface BaseImageType {
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface RandomImageType extends BaseImageType {
    breeds: BreedType[];
}
