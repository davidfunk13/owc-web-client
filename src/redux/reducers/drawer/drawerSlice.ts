import { RootState, } from "../../rootReducer";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface IDrawerSliceState {
    open: boolean
}

const initialState: IDrawerSliceState = { open: false, };

const drawerSlice = createSlice({
	name:     "drawer",
	initialState,
	reducers: {
		setOpen: (state: IDrawerSliceState, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
});

export const selectDrawerOpen = (state: RootState) => state.drawer.open;

export const { setOpen, } = drawerSlice.actions;

export default drawerSlice.reducer;
