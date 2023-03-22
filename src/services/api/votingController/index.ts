import { ApiService } from "..";
import {
    RandomBreedType,
    SetFavouriteDataType,
    SetFavouritesResponseType,
    VotingDataType,
    VotingResponseType,
} from "./types";

export class VotingController {
    private static instance: VotingController;
    private readonly apiService: ApiService;

    constructor() {
        this.apiService = ApiService.getInstance();
    }

    static getInstance(): VotingController {
        if (!VotingController.instance) {
            VotingController.instance = new VotingController();
        }

        return VotingController.instance;
    }

    /**
     * getBreeds
     */
    public getRandomBreed(signal: AbortSignal): Promise<RandomBreedType> {
        return this.apiService.get<RandomBreedType>("images/search", signal);
    }

    /**
     * likeBreed
     */
    public likeBreed(image_id: string): Promise<VotingResponseType> {
        return this.apiService.post<VotingDataType, VotingResponseType>(
            "votes",
            { value: 10, image_id, sub_id: "cat-super-user-21032023" }
        );
    }

    /**
     * dislikeBreed
     */
    public dislikeBreed(image_id: string): Promise<VotingResponseType> {
        return this.apiService.post<VotingDataType, VotingResponseType>(
            "votes",
            { value: 1, image_id, sub_id: "cat-super-user-21032023" }
        );
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
