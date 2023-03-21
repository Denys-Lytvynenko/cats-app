import { ApiService } from "..";
import { RandomBreedType } from "./types";

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
}
