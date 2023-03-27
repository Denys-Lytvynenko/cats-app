import { ApiService } from "..";
import {
    DeleteFavouriteResponse,
    GetFavouritesResponse,
    SetFavouriteDataType,
    SetFavouritesResponseType,
} from "./types";

export class FavouritesController {
    private static instance: FavouritesController;
    private readonly apiService: ApiService;
    private readonly baseUrl: string;
    private readonly sub_id: string;
    constructor() {
        this.apiService = new ApiService();
        this.baseUrl = "favourites";
        this.sub_id = import.meta.env.VITE_SUB_ID;
    }

    static getInstance(): FavouritesController {
        if (!FavouritesController.instance) {
            FavouritesController.instance = new FavouritesController();
        }

        return FavouritesController.instance;
    }

    /**
     * favouriteBreed
     */
    public setFavourite(image_id: string): Promise<SetFavouritesResponseType> {
        return this.apiService.post<
            SetFavouriteDataType,
            SetFavouritesResponseType
        >(this.baseUrl, { image_id, sub_id: this.sub_id });
    }

    /**
     * getFavourites
     */
    public getFavourites(signal?: AbortSignal): Promise<GetFavouritesResponse> {
        return this.apiService.get<GetFavouritesResponse>(this.baseUrl, signal);
    }

    /**
     * deleteFavourite
     */
    public deleteFavourite(
        favourite_id: string
    ): Promise<DeleteFavouriteResponse> {
        return this.apiService.delete<DeleteFavouriteResponse>(
            `${this.baseUrl}/${favourite_id}`
        );
    }
}
