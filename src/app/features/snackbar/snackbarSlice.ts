import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SnackbarState {
    open: false,
    message: string,
    variant: "success" | "error"
}


export const initialState: SnackbarState = {
    open: false,
    message: "",
    variant: "success"
};

export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        openSnackbar: (state, action) => {
            state.open = action.payload;
        },
    },
    extraReducers: (builder) => { },
});

export const { openSnackbar } = snackbarSlice.actions;

export const selectSnackbarOpen = (state: RootState) => state.snackbar.open;
export const selectSnackbarMessage = (state: RootState) => state.snackbar.message;
export const selectSnackbarVariant = (state: RootState) => state.snackbar.variant;

export default snackbarSlice.reducer;
