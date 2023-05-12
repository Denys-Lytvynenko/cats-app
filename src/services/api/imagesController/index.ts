import { ApiService } from "..";
import {
    BaseImageType,
    GetImagesProps,
    RandomImageType,
    UploadImageResponse,
} from "./types";

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
        signal?: AbortSignal
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

    /**
     * uploadImage
     */
    public uploadImage(data: FormData): Promise<UploadImageResponse> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/${this.baseUrl}/upload`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "x-api-key": import.meta.env.VITE_API_KEY,
                        },
                        body: data,
                    }
                );

                if (!response.ok) {
                    throw response;
                }

                const actualData = await response.json();

                resolve(actualData);
            } catch (error) {
                reject(error);
            }
        });
    }
}
