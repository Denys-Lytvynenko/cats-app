export type RandomBreedType = {
    breeds: [];
    id: string;
    url: string;
    width: number;
    height: number;
}[];

export interface VotingDataType extends SetFavouriteDataType {
    value: 1 | 10;
}

export interface VotingResponseType extends SetFavouritesResponseType {
    image_id: string;
    sub_id: string;
    value: number;
    country_code: string;
}

export interface SetFavouriteDataType {
    image_id: string;
    sub_id: string;
}

export interface SetFavouritesResponseType {
    message: "SUCCESS";
    id: number;
}
