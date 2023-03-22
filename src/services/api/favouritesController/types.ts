export interface SetFavouriteDataType {
    image_id: string;
    sub_id: string;
}

export interface SetFavouritesResponseType {
    id: number;
    message: "SUCCESS";
}

export interface FavouritesItem {
    created_at: string;
    id: number;
    image: {
        id: string;
        url: string;
    };
    image_id: string;
    sub_id: string;
    user_id: string;
}

export type GetFavouritesResponse = FavouritesItem[];
