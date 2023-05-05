export interface VotingButtonsGroupProps {
    isFavourite: boolean;
    onLikeClick: () => void;
    onFavouriteClick: () => void;
    onDislikeClick: () => void;
    disabled: boolean;
}
