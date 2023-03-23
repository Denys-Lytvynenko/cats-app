import { GetVotesResponseType } from "@api/votingController/types";

export interface LikesGalleryGridProps {
    loading: boolean;
    data: GetVotesResponseType[] | null;
}
