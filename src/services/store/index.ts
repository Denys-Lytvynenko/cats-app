import { configureStore } from "@reduxjs/toolkit";

import breedSlice from "./slices/breedSlice";
import breedsSlice from "./slices/breedsSlice";
import votesReducer from "./slices/votesSlice";

const store = configureStore({
    reducer: {
        votes: votesReducer,
        breeds: breedsSlice,
        breed: breedSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
