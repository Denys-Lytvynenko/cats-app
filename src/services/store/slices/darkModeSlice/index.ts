import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isDarkMode: boolean;
};

const initialState: InitialState = {
    isDarkMode: false,
};

const dartModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        turnDarkModeOn: state => {
            state.isDarkMode = true;
        },
        turnDarkModeOff: state => {
            state.isDarkMode = false;
        },
    },
});

export const { turnDarkModeOn, turnDarkModeOff } = dartModeSlice.actions;

export default dartModeSlice.reducer;
