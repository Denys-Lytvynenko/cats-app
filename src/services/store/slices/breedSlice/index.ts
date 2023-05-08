import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BreedType } from "@api/breedsController/types";
import { ImagesController } from "@api/imagesController";

type InitialStateType = {
    loading: boolean;
    description: BreedType | null;
    sliderImages: string[] | null;
    errors?: string;
};

const initialState: InitialStateType = {
    loading: true,
    description: null,
    sliderImages: null,
    errors: "",
};

type FetchImagesResultType = {
    slidersImages: string[] | null;
    description: BreedType | null;
};

export const fetchImages = createAsyncThunk<FetchImagesResultType, string>(
    "breed/fetchImages",
    async imageId => {
        const image = await ImagesController.getInstance().getImage(imageId);

        let result: FetchImagesResultType = {
            slidersImages: null,
            description: null,
        };

        if (image) {
            result.description = image.breeds[0];

            const images =
                await ImagesController.getInstance().getSimilarImages(
                    image.breeds[0].id,
                    "10"
                );

            if (images) {
                const actualData = images.map(({ url }) => url);

                result.slidersImages = actualData;
            } else {
                result.slidersImages = null;
            }
        } else {
            result.description = null;
        }

        return result;
    }
);
const breedSlice = createSlice({
    name: "breed",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // fetchImages
        builder.addCase(fetchImages.pending, state => {
            state.loading = true;
        });

        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.loading = false;
            state.description = action.payload.description;
            state.sliderImages = action.payload.slidersImages;
            state.errors = "";
        });

        builder.addCase(fetchImages.rejected, (state, action) => {
            if (action.error.message !== "Abort fetchImages") {
                state.loading = false;
                state.description = null;
                state.sliderImages = null;
                state.errors = action.error.message || "Something went wrong";
            }
        });
    },
});

export default breedSlice.reducer;
