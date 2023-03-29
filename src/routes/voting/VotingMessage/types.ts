export interface VotingMessageProps {
    time: Date;
    imageId: string;
    reaction: "like" | "dislike" | "favourite" | "remove";
    className?: string;
}
