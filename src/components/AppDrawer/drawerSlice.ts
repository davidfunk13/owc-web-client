import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IDrawerSliceState {
    open: boolean
}

const initialState: IDrawerSliceState = {
    open: false,
};

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setDrawerOpen: (state, action) => {
            state.open = action.payload
        }
    },
});

export const selectDrawerOpen = (state: RootState) => state.drawer.open;

export const {
    setDrawerOpen
} = drawerSlice.actions;

export default drawerSlice.reducer