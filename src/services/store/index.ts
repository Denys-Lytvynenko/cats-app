import { configureStore } from "@reduxjs/toolkit";

import breedReducer from "./slices/breedSlice";
import breedsReducer from "./slices/breedsSlice";
import darkModeSlice from "./slices/darkModeSlice";
import galleryReducer from "./slices/gallerySlice";
import mobileSlice from "./slices/mobileSlice";
import searchReducer from "./slices/searchSlice";
import votesReducer from "./slices/votesSlice";

const store = configureStore({
    reducer: {
        breed: breedReducer,
        breeds: breedsReducer,
        darkMode: darkModeSlice,
        gallery: galleryReducer,
        mobile: mobileSlice,
        search: searchReducer,
        votes: votesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
