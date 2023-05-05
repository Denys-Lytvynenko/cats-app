import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { FavouritesController } from "@api/favouritesController";
import {
    DeleteFavouriteResponse,
    SetFavouritesResponseType,
} from "@api/favouritesController/types";
import { ImagesController } from "@api/imagesController";
import { RandomImageType } from "@api/imagesController/types";
import { VotingController } from "@api/votingController";
import { VotingResponseType } from "@api/votingController/types";
import { LogMessageDataType } from "@routes/voting/types";

type InitialStateType = {
    isFavourite?: string;
    actionLogMessages: {
        messages: LogMessageDataType | null;
        messagesError: string;
        messagesLoading: boolean;
    };
    randomBreedImage: {
        randomBreedImage: RandomImageType;
        randomBreedImageError: string;
        randomBreedImageLoading: boolean;
    };
    nextImage: boolean;
    updateFavourites: boolean;
};

const initialState: InitialStateType = {
    isFavourite: "",
    actionLogMessages: {
        messages: null,
        messagesError: "",
        messagesLoading: true,
    },
    randomBreedImage: {
        randomBreedImage: {
            breeds: [],
            height: 100,
            id: "",
            url: "",
            width: 100,
        },
        randomBreedImageError: "",
        randomBreedImageLoading: true,
    },
    nextImage: true,
    updateFavourites: true,
};

export const fetchActionLogMessages = createAsyncThunk<
    {
        isFavourite: string;
        messages: LogMessageDataType | null;
    },
    string
>("votes/fetchFavourites", async currentBreed => {
    const favourites = await FavouritesController.getInstance().getFavourites();
    const votes = await VotingController.getInstance().getVotes();

    if (favourites && votes) {
        // Get action log
        const convertFavourites: LogMessageDataType = favourites.map(
            ({ id, created_at, image_id }) => ({
                id,
                created_at,
                image_id,
                value: 5,
            })
        );

        const convertVotes: LogMessageDataType = votes.map(
            ({ id, created_at, image_id, value }) => ({
                id,
                created_at,
                image_id,
                value,
            })
        );

        const concatenated: LogMessageDataType =
            convertFavourites.concat(convertVotes);

        const messages = concatenated.sort(
            (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
        );

        // Check if current image is in favourite
        let findFavourite = favourites.find(
            item => item.image_id === currentBreed
        );

        let isFavourite: string;

        if (findFavourite) {
            isFavourite = findFavourite.id.toString();
        } else {
            isFavourite = "";
        }

        return { messages, isFavourite };
    } else {
        return { messages: null, isFavourite: "" };
    }
});

export const fetchRandomImage = createAsyncThunk<RandomImageType>(
    "votes/fetchRandomImage",
    async () => {
        const data = await ImagesController.getInstance().getRandomImage();

        return data[0];
    }
);

export const likeBreed = createAsyncThunk<VotingResponseType, string>(
    "votes/likeBreed",
    currentBreedId => {
        return VotingController.getInstance().like(currentBreedId);
    }
);

export const dislikeBreed = createAsyncThunk<VotingResponseType, string>(
    "votes/dislikeBreed",
    currentBreedId => {
        return VotingController.getInstance().dislike(currentBreedId);
    }
);

export const setFavouriteBreed = createAsyncThunk<
    SetFavouritesResponseType,
    string
>("votes/setFavouriteBreed", currentBreed =>
    FavouritesController.getInstance().setFavourite(currentBreed)
);

export const deleteFavourite = createAsyncThunk<
    DeleteFavouriteResponse,
    string
>("votes/deleteFavouriteBreed", isFavourite =>
    FavouritesController.getInstance().deleteFavourite(isFavourite)
);

const votesSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // fetchActionLogMessage
        builder.addCase(fetchActionLogMessages.pending, state => {
            state.actionLogMessages.messagesLoading = true;
        });

        builder.addCase(fetchActionLogMessages.fulfilled, (state, action) => {
            state.actionLogMessages.messagesLoading = false;
            state.actionLogMessages.messages = action.payload.messages;
            state.isFavourite = action.payload.isFavourite;
        });

        builder.addCase(fetchActionLogMessages.rejected, (state, action) => {
            if (action.error.message !== "Abort fetchActionLogMessages") {
                state.actionLogMessages.messagesLoading = false;
                state.actionLogMessages.messages = null;
                state.isFavourite = "";
                state.actionLogMessages.messagesError =
                    action.error.message || "Something went wrong";
            }
        });

        // fetchRandomImage
        builder.addCase(fetchRandomImage.pending, state => {
            state.randomBreedImage.randomBreedImageLoading = true;
        });

        builder.addCase(fetchRandomImage.fulfilled, (state, action) => {
            state.randomBreedImage.randomBreedImageLoading = false;
            state.randomBreedImage.randomBreedImage = action.payload;
            state.randomBreedImage.randomBreedImageError = "";
        });

        builder.addCase(fetchRandomImage.rejected, (state, action) => {
            if (action.error.message !== "fetchRandomImage") {
                state.randomBreedImage.randomBreedImageLoading = false;
                state.randomBreedImage.randomBreedImage = {
                    breeds: [],
                    height: 100,
                    id: "",
                    url: "",
                    width: 100,
                };
                state.randomBreedImage.randomBreedImageError =
                    action.error.message || "Something went wrong";
            }
        });

        // likeBreed
        builder.addCase(likeBreed.pending, state => {
            state.randomBreedImage.randomBreedImageLoading = true;
        });

        builder.addCase(likeBreed.fulfilled, (state, action) => {
            if (action.payload.message === "SUCCESS") {
                state.nextImage = !state.nextImage;
            }
        });

        builder.addCase(likeBreed.rejected, state => {
            state.randomBreedImage.randomBreedImageLoading = false;
        });

        // dislikeBreed
        builder.addCase(dislikeBreed.pending, state => {
            state.randomBreedImage.randomBreedImageLoading = true;
        });

        builder.addCase(dislikeBreed.fulfilled, (state, action) => {
            if (action.payload.message === "SUCCESS") {
                state.nextImage = !state.nextImage;
            }
        });

        builder.addCase(dislikeBreed.rejected, state => {
            state.randomBreedImage.randomBreedImageLoading = false;
        });

        // setFavourite
        builder.addCase(setFavouriteBreed.pending, state => {
            state.actionLogMessages.messagesLoading = true;
        });

        builder.addCase(setFavouriteBreed.fulfilled, (state, action) => {
            if (action.payload.message === "SUCCESS") {
                state.updateFavourites = !state.updateFavourites;
            }
        });

        builder.addCase(setFavouriteBreed.rejected, state => {
            state.actionLogMessages.messagesLoading = false;
        });

        // deleteFavourite

        builder.addCase(deleteFavourite.pending, state => {
            state.actionLogMessages.messagesLoading = true;
        });

        builder.addCase(deleteFavourite.fulfilled, (state, action) => {
            if (action.payload.message === "SUCCESS") {
                state.isFavourite = "";
                state.actionLogMessages.messagesLoading = false;
            }
        });

        builder.addCase(deleteFavourite.rejected, state => {
            state.actionLogMessages.messagesLoading = false;
        });
    },
});

export default votesSlice.reducer;
