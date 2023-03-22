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

    constructor() {
        this.apiService = new ApiService();
        this.baseUrl = "favourites";
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
        >(this.baseUrl, { image_id, sub_id: "cat-super-user-21032023" });
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
