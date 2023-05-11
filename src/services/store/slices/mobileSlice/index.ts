import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isMobile: boolean;
    screenSize: number;
    isTablet: boolean;
};

const initialState: InitialState = {
    isMobile: false,
    screenSize: 0,
    isTablet: false,
};

const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setScreenSize: (state, action) => {
            state.screenSize = action.payload;
            if (action.payload <= 768) {
                state.isTablet = true;
            } else {
                state.isTablet = false;
            }
        },
    },
});

export const { setIsMobile, setScreenSize } = mobileSlice.actions;
export default mobileSlice.reducer;
