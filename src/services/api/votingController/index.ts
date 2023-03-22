import { ApiService } from "..";
import {
    RandomBreedType,
    VotingBreedDataType,
    VotingBreedResponseType,
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
    public likeBreed(image_id: string): Promise<VotingBreedResponseType> {
        return this.apiService.post<
            VotingBreedDataType,
            VotingBreedResponseType
        >("votes", { value: 10, image_id, sub_id: "cat-super-user-21032023" });
    }

    /**
     * dislikeBreed
     */
    public dislikeBreed(image_id: string): Promise<VotingBreedResponseType> {
        return this.apiService.post<
            VotingBreedDataType,
            VotingBreedResponseType
        >("votes", { value: 1, image_id, sub_id: "cat-super-user-21032023" });
    }
}
