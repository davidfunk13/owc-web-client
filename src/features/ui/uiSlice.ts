import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UIState {
    dark: boolean
}

export const initialState: UIState = {
    dark: false
};
export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload
        },
    },
    extraReducers: (builder) => { },
});

export const { setDark } = uiSlice.actions;

export const selectDark = (state: RootState) => state.ui.dark;

export default uiSlice.reducer;
