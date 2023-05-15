import { ApiService } from "..";
import { DeleteFavouriteResponse } from "../favouritesController/types";
import {
    GetVotesResponseType,
    VotingDataType,
    VotingResponseType,
} from "./types";

export class VotingController {
    private static instance: VotingController;
    private readonly apiService: ApiService;
    private readonly baseUrl: string;
    private readonly sub_id: string;

    constructor() {
        this.apiService = ApiService.getInstance();
        this.baseUrl = "votes";
        this.sub_id = import.meta.env.VITE_SUB_ID;
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
    public like(image_id: string): Promise<VotingResponseType> {
        return this.apiService.post<VotingDataType, VotingResponseType>(
            this.baseUrl,
            { value: 10, image_id, sub_id: this.sub_id }
        );
    }

    /**
     * dislikeBreed
     */
    public dislike(image_id: string): Promise<VotingResponseType> {
        return this.apiService.post<VotingDataType, VotingResponseType>(
            this.baseUrl,
            { value: 1, image_id, sub_id: this.sub_id }
        );
    }

    /**
     * getVotes
     */
    public getVotes(signal?: AbortSignal): Promise<GetVotesResponseType> {
        return this.apiService.get<GetVotesResponseType>(
            `${this.baseUrl}?${this.sub_id}`,
            signal
        );
    }

    /**
     * deleteLikeDislike
     */
    public deleteLikeDislike(
        breed_id: string
    ): Promise<DeleteFavouriteResponse> {
        return this.apiService.delete(`${this.baseUrl}/${breed_id}`);
    }
}
