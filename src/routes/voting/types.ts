import { VoteValueType } from "@api/votingController/types";

export type LogMessageDataType = ({
    created_at: Date;
    id: number;
    image_id: string;
} & VoteValueType)[];
