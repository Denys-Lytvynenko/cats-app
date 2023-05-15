import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isMobile: boolean;
    screenSize: number;
    isTablet: boolean;
    isMenuOpened: boolean;
};

const initialState: InitialState = {
    isMobile: false,
    screenSize: 0,
    isTablet: false,
    isMenuOpened: false,
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
        setMenuOpen: (state, action) => {
            state.isMenuOpened = action.payload;
        },
    },
});

export const { setIsMobile, setScreenSize, setMenuOpen } = mobileSlice.actions;
export default mobileSlice.reducer;
