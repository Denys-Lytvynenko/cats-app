export interface VotingMessageProps {
    time: string;
    imageId: string;
    reaction: "like" | "dislike" | "favourite" | "remove";
    className?: string;
}
