import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import DrawerSliceState from "./DrawerSliceState";

export const initialState: DrawerSliceState = {
    open: false,
};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        openDrawer: (state, action) => {
            state.open = action.payload;
        }
    },
    extraReducers: (builder) => { },
});

export const { openDrawer } = drawerSlice.actions;

export const selectDrawerOpen = (state: RootState) => state.drawer.open;

export default drawerSlice.reducer;
