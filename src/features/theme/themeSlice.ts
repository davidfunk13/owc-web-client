import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import ThemeSliceState from "./ThemeSliceState";

export const initialState: ThemeSliceState = {
    dark: JSON.parse(sessionStorage.getItem("isDark") as string) ?? false
};
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload;
            sessionStorage.setItem("isDark", JSON.stringify(state.dark));
        },
        resetThemeSlice: (state) => {
            sessionStorage.removeItem("isDark");
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => { },
});

export const { setDark, resetThemeSlice } = themeSlice.actions;

export const selectDark = (state: RootState) => state.theme.dark;

export default themeSlice.reducer;
