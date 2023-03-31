import { VoteValueType } from "@api/votingController/types";

export interface LogMessageDataType extends VoteValueType {
    created_at: Date;
    id: number;
    image_id: string;
}
