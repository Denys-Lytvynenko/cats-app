import { configureStore } from "@reduxjs/toolkit";

import breedReducer from "./slices/breedSlice";
import breedsReducer from "./slices/breedsSlice";
import galleryReducer from "./slices/gallerySlice";
import searchReducer from "./slices/searchSlice";
import votesReducer from "./slices/votesSlice";

const store = configureStore({
    reducer: {
        votes: votesReducer,
        breeds: breedsReducer,
        breed: breedReducer,
        gallery: galleryReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
