export type RandomBreedType = {
    breeds: [];
    id: string;
    url: string;
    width: number;
    height: number;
}[];

export interface VotingBreedDataType {
    image_id: string;
    sub_id: string;
    value: 1 | 10;
}

export interface VotingBreedResponseType {
    message: "SUCCESS";
    id: number;
    image_id: string;
    sub_id: string;
    value: number;
    country_code: string;
}
