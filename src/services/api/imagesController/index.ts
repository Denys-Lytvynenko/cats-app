import { ApiService } from "..";
import { BaseImageType, GetImagesProps, RandomImageType } from "./types";

export class ImagesController {
    private static instance: ImagesController;
    private readonly apiService: ApiService;
    private readonly baseUrl: string;
    constructor() {
        this.apiService = new ApiService();
        this.baseUrl = "images";
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
        return this.apiService.get<RandomImageType[]>(
            `${this.baseUrl}/search`,
            signal
        );
    }

    /**
     * getImage
     */
    public getImage(
        image_id: string,
        signal?: AbortSignal
    ): Promise<RandomImageType> {
        return this.apiService.get<RandomImageType>(
            `${this.baseUrl}/${image_id}`,
            signal
        );
    }

    /**
     * getSimilarImages
     */
    public getSimilarImages(
        breed_id: string,
        limit: string,
        signal: AbortSignal
    ): Promise<BaseImageType[]> {
        return this.apiService.get<BaseImageType[]>(
            `${this.baseUrl}/search?breed_ids=${breed_id}&limit=${limit}`,
            signal
        );
    }

    /**
     * getImages
     */
    public getImages({
        limit,
        page,
        queryParams,
        signal,
    }: GetImagesProps): Promise<RandomImageType[]> {
        return this.apiService.get<RandomImageType[]>(
            `${this.baseUrl}/search?limit=${limit}&page=${page}${queryParams}`,
            signal
        );
    }
}
