import {
    SetFavouriteDataType,
    SetFavouritesResponseType,
} from "../favouritesController/types";

export interface VotingDataType extends SetFavouriteDataType {
    value: 1 | 10;
}

export interface VotingResponseType extends SetFavouritesResponseType {
    country_code: string;
    image_id: string;
    sub_id: string;
    value: number;
}

export interface VoteValueType {
    value: 10 | 5 | 1;
}
export type GetVotesResponseType = ({
    country_code: string;
    created_at: Date;
    id: number;
    image_id: string;
    image: {
        id: string;
        url: string;
    };
    sub_id: string;
} & VoteValueType)[];
