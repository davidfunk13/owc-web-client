import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ThemeState {
    dark: boolean
}

export const initialState: ThemeState = {
    dark: JSON.parse(sessionStorage.getItem("isDark") as string) ?? false
};
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload
            sessionStorage.setItem("isDark", JSON.stringify(state.dark))
        },
    },
    extraReducers: (builder) => { },
});

export const { setDark } = themeSlice.actions;

export const selectDark = (state: RootState) => state.theme.dark;

export default themeSlice.reducer;
