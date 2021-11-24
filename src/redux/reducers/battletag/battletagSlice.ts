import { RootState, } from "../../rootReducer";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface BattletagState {
    anus: boolean
}

const initialState: BattletagState = { anus: true, };

const battletagSlice = createSlice({
	name:     "battletag",
	initialState,
	reducers: {
		setAnus: (state: BattletagState, action: PayloadAction<boolean>) => {
			state.anus = action.payload;
		},
	},
});

export const selectBattletagAnus = (state: RootState) => state.battletag.anus;

export const { setAnus, } = battletagSlice.actions;

export default battletagSlice.reducer;
