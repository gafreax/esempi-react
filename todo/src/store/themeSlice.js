import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light"};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload ;
        },
        invertTheme: (state) => {
            if(state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
        },
    },
});

export const { setTheme, invertTheme } = themeSlice.actions;

export default themeSlice.reducer;