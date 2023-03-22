import {
    SetFavouriteDataType,
    SetFavouritesResponseType,
} from "../favouritesController/types";

export interface VotingDataType extends SetFavouriteDataType {
    value: 1 | 10;
}

export interface VotingResponseType extends SetFavouritesResponseType {
    image_id: string;
    sub_id: string;
    value: number;
    country_code: string;
}
