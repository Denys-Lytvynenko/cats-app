import { ApiService } from "..";
import { VotingDataType, VotingResponseType } from "./types";

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
}
