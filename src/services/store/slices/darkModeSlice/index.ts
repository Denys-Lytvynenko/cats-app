import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isDarkMode: boolean;
};

const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState: InitialState = {
    isDarkMode: getCurrentTheme(),
};

const dartModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        switchDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const { switchDarkMode } = dartModeSlice.actions;

export default dartModeSlice.reducer;
