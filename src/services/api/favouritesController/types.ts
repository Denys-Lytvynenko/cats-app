export interface SetFavouriteDataType {
    image_id: string;
    sub_id: string;
}

export interface SetFavouritesResponseType extends DeleteFavouriteResponse {
    id: number;
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

export interface DeleteFavouriteResponse {
    message: "SUCCESS";
}
