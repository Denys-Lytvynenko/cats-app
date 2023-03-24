import { ApiService } from "..";
import { BreedType } from "./types";

export class BreedsController {
    private static instance: BreedsController;
    private readonly baseUrl: string;
    private readonly apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
        this.baseUrl = "breeds";
    }

    static getInstance(): BreedsController {
        if (!BreedsController.instance) {
            BreedsController.instance = new BreedsController();
        }

        return BreedsController.instance;
    }

    /**
     * getBreeds
     */
    public getBreeds(
        limit?: string,
        page?: string,
        signal?: AbortSignal
    ): Promise<BreedType[]> {
        return this.apiService.get<BreedType[]>(
            `${this.baseUrl}?limit=${limit}&page=${page}`,
            signal
        );
    }
}
