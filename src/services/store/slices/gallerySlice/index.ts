import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ImagesController } from "@api/imagesController";
import { UseTilesDataType } from "@hooks/useTiles/types";

type InitialStateType = {
    loading: boolean;
    data: UseTilesDataType | null;
    error?: string;
};

const initialState: InitialStateType = {
    data: null,
    loading: true,
    error: "",
};

export const fetchGalleryImages = createAsyncThunk<
    UseTilesDataType | null,
    {
        orderValue: string;
        typeValue: string;
        breedsValue: string;
        limitValue: string;
    }
>(
    "gallery/fetchGalleryImages",
    async ({ orderValue, typeValue, breedsValue, limitValue }) => {
        const queryParams = new String().concat(
            `&order=${orderValue}`,
            `&mime_types=${typeValue}`,
            breedsValue ? `&breed_ids=${breedsValue}` : ""
        );

        const galleryImages = await ImagesController.getInstance().getImages({
            limit: limitValue,
            page: "0",
            queryParams,
        });

        if (galleryImages) {
            const actualData: UseTilesDataType = galleryImages.map(
                ({ id, url }) => ({
                    id,
                    image: url,
                })
            );

            return actualData;
        } else {
            return null;
        }
    }
);

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // fetchGalleryImages
        builder.addCase(fetchGalleryImages.pending, state => {
            state.loading = true;
        });

        builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });

        builder.addCase(fetchGalleryImages.rejected, (state, action) => {
            if (action.error.message !== "Abort fetchGalleryImages") {
                state.loading = false;
                state.data = null;
                state.error = action.error.message || "Something went wrong";
            }
        });
    },
});

export default gallerySlice.reducer;
