import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import SnackbarSliceState from "./SnackbarSliceState";

export const initialState: SnackbarSliceState = {
    open: false,
    message: undefined,
    variant: "success"
};

export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        openSnackbar: (state, action) => {
            state.open = action.payload;
        },
        setSnackbarMessage: (state, action) => {
            state.message = action.payload;
        },
        setSnackbarVariant: (state, action) => {
            state.variant = action.payload;
        },
        resetSnackbarSlice: (state) => {
            Object.assign(state, initialState);
        }
    },
    extraReducers: (builder) => { },
});

export const { openSnackbar, setSnackbarMessage, setSnackbarVariant, resetSnackbarSlice } = snackbarSlice.actions;

export const selectSnackbarOpen = (state: RootState) => state.snackbar.open;
export const selectSnackbarMessage = (state: RootState) => state.snackbar.message;
export const selectSnackbarVariant = (state: RootState) => state.snackbar.variant;

export default snackbarSlice.reducer;