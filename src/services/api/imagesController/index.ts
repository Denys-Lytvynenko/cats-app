import { ApiService } from "..";
import { RandomImageType } from "./types";

export class ImagesController {
    private static instance: ImagesController;
    private readonly apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
    }

    static getInstance(): ImagesController {
        if (!ImagesController.instance) {
            ImagesController.instance = new ImagesController();
        }

        return ImagesController.instance;
    }

    /**
     * getRandomImage
     */
    public getRandomImage(signal?: AbortSignal): Promise<RandomImageType[]> {
        return this.apiService.get<RandomImageType[]>("images/search", signal);
    }
}
