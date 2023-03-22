import { FC, useMemo } from "react";

import { cn } from "@utils/classNames";
import { VotingMessageProps } from "./types";

import { ReactComponent as DislikeIcon } from "@assets/icons/dislikes.svg";
import { ReactComponent as HeardIcon } from "@assets/icons/heard.svg";
import { ReactComponent as LikeIcon } from "@assets/icons/likes.svg";

import "./styles.scss";

const reactionIcons = {
    like: <LikeIcon />,
    dislike: <DislikeIcon />,
    favourite: <HeardIcon />,
    remove: "",
};

const VotingMessage: FC<VotingMessageProps> = ({
    time,
    imageId,
    reaction,
    className,
}) => {
    const message = useMemo(() => {
        switch (reaction) {
            case "like":
                return (
                    <div className="voting__message-text">
                        Image ID: <b>${imageId}</b> was added to Likes
                    </div>
                );
            case "dislike":
                return (
                    <div className="voting__message-text">
                        Image ID: <b>${imageId}</b> was added to Dislikes
                    </div>
                );
            case "favourite":
                return (
                    <div className="voting__message-text">
                        Image ID: <b>${imageId}</b> was added to Favourites
                    </div>
                );
            default:
                return (
                    <div className="voting__message-text">
                        Image ID: <b>${imageId}</b> was removed from Favourites
                    </div>
                );
        }
    }, []);

    return (
        <div className={cn("voting__message", className)}>
            <div className="voting__message-time">{time}</div>

            {message}

            <div className={cn("voting__message-reaction", reaction)}>
                {reactionIcons[reaction]}
            </div>
        </div>
    );
};

export default VotingMessage;
