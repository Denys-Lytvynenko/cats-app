import { ApiService } from "..";
import { SetFavouritesResponseType, SetFavouriteDataType } from "./types";

export class FavouritesController {
    private static instance: FavouritesController;
    private readonly apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
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
    public setFavouriteBreed(
        image_id: string
    ): Promise<SetFavouritesResponseType> {
        return this.apiService.post<
            SetFavouriteDataType,
            SetFavouritesResponseType
        >("favourites", { image_id, sub_id: "cat-super-user-21032023" });
    }
}
