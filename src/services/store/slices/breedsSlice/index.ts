import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BreedsController } from "@api/breedsController";
import { ImagesController } from "@api/imagesController";
import { OptionsType } from "@components/Select/types";
import { UseTilesDataType } from "@hooks/useTiles/types";

type InitialState = {
    breedsImages: UseTilesDataType | null;
    breedsImagesLoading: boolean;
    breedsImagesError?: string;
    breedsOptions: OptionsType;
    breedsOptionsError?: string;
    breedsOptionsLoading: boolean;
};

const initialOptions: OptionsType = [{ name: "All breeds", value: "" }];

const initialState: InitialState = {
    breedsImages: null,
    breedsImagesLoading: true,
    breedsImagesError: "",
    breedsOptions: initialOptions,
    breedsOptionsError: "",
    breedsOptionsLoading: false,
};

export const fetchBreedsImages = createAsyncThunk<
    UseTilesDataType | null,
    { orderValue: string; breedsValue: string; limitValue: string }
>(
    "breeds/fetchBreedsImages",
    async ({ orderValue, breedsValue, limitValue }) => {
        const queryParams = new String().concat(
            `&order=${orderValue}`,
            breedsValue ? `&breed_ids=${breedsValue}` : "",
            "&has_breeds=true"
        );

        const breedsImages = await ImagesController.getInstance().getImages({
            limit: limitValue,
            page: "0",
            queryParams,
        });

        if (breedsImages) {
            const actualData: UseTilesDataType = breedsImages
                .filter(item => item.breeds.length)
                .map(({ id, url, breeds }) => ({
                    id,
                    image: url,
                    href: id,
                    name: breeds[0].name,
                }));

            return actualData;
        } else {
            return null;
        }
    }
);

export const fetchBreedsOptions = createAsyncThunk<OptionsType>(
    "breeds/fetchBreedsOptions",
    async () => {
        const allBreeds = await BreedsController.getInstance().getBreeds();

        if (allBreeds) {
            const breedsOpt = allBreeds
                .map(({ id, name }) => ({
                    name,
                    value: id,
                }))
                .filter(item => item.name && item.value);

            breedsOpt.unshift(initialOptions[0]);

            // Remove duplicated options
            const filteredOpt = breedsOpt.filter(
                (item, index, self) =>
                    index ===
                    self.findIndex(
                        t => t?.value === item?.value && t?.name === item?.name
                    )
            );

            return filteredOpt;
        } else {
            return initialOptions;
        }
    }
);

const breedsSlice = createSlice({
    name: "breeds",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // fetchBreedsImages
        builder.addCase(fetchBreedsImages.pending, state => {
            state.breedsImagesLoading = true;
        });

        builder.addCase(fetchBreedsImages.fulfilled, (state, action) => {
            state.breedsImagesLoading = false;
            state.breedsImages = action.payload;
            state.breedsImagesError = "";
        });

        builder.addCase(fetchBreedsImages.rejected, (state, action) => {
            if (action.error.message !== "Abort fetchBreedsImages") {
                state.breedsImagesLoading = false;
                state.breedsImages = null;
                state.breedsImagesError =
                    action.error.message || "Something went wrong";
            }
        });

        // fetchBreedsOptions
        builder.addCase(fetchBreedsOptions.pending, state => {
            state.breedsOptionsLoading = true;
        });

        builder.addCase(fetchBreedsOptions.fulfilled, (state, action) => {
            state.breedsOptionsLoading = false;
            state.breedsOptions = action.payload;
            state.breedsOptionsError = "";
        });

        builder.addCase(fetchBreedsOptions.rejected, (state, action) => {
            if (action.error.message !== "Abort fetchBreedsOptions") {
                state.breedsOptionsLoading = false;
                state.breedsOptions = initialOptions;
                state.breedsOptionsError =
                    action.error.message || "Something went wrong";
            }
        });
    },
});

export default breedsSlice.reducer;
