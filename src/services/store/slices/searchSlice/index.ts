import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BreedsController } from "@api/breedsController";
import { ImagesController } from "@api/imagesController";
import { UseTilesDataType } from "@hooks/useTiles/types";
import { routes } from "@routes/routes";

type InitialState = {
    searchLoading: boolean;
    searchData: UseTilesDataType | null;
    searchError?: string;
};

const initialState: InitialState = {
    searchLoading: true,
    searchData: null,
    searchError: "",
};

export const findBreed = createAsyncThunk<UseTilesDataType | null, string>(
    "search/findBreed",
    async searchId => {
        const breeds = await BreedsController.getInstance().getBreeds("", "0");

        if (breeds && searchId) {
            const filteredData = breeds.filter(({ name }) =>
                name.toLowerCase().includes(searchId.toLocaleLowerCase())
            );

            if (filteredData[0]) {
                const queryParams = new String().concat(
                    filteredData[0]?.id
                        ? `&breed_ids=${filteredData[0].id}`
                        : ""
                );

                const images = await ImagesController.getInstance().getImages({
                    limit: "100",
                    page: "0",
                    queryParams,
                });

                const searchData: UseTilesDataType = images.map(
                    ({ breeds, id, url }) => ({
                        id,
                        image: url,
                        name: breeds[0].name,
                        href: `${routes.breeds}/${id}`,
                    })
                );

                return searchData;
            }
        }

        return null;
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(findBreed.pending, state => {
            state.searchLoading = true;
        });

        builder.addCase(findBreed.fulfilled, (state, action) => {
            state.searchData = action.payload;
            state.searchError = "";
            state.searchLoading = false;
        });

        builder.addCase(findBreed.rejected, (state, action) => {
            if (action.error.message !== "Abort findBreed") {
                state.searchData = null;
                state.searchError =
                    action.error.message || "Something went wrong";
                state.searchLoading = false;
            }
        });
    },
});

export default searchSlice.reducer;
