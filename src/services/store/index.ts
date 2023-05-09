import { configureStore } from "@reduxjs/toolkit";

import breedReducer from "./slices/breedSlice";
import breedsReducer from "./slices/breedsSlice";
import galleryReducer from "./slices/gallerySlice";
import searchReducer from "./slices/searchSlice";
import votesReducer from "./slices/votesSlice";
import darkModeSlice from "./slices/darkModeSlice";

const store = configureStore({
    reducer: {
        breed: breedReducer,
        breeds: breedsReducer,
        darkMode: darkModeSlice,
        gallery: galleryReducer,
        search: searchReducer,
        votes: votesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
