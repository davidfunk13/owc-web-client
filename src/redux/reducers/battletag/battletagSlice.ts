import { RootState, } from "../../rootReducer";
import testThunk from "../../thunks/testThunk/testThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface BattletagState {
	anus: boolean
	loading: boolean
	message: string
}

const initialState: BattletagState = {
	anus:    true,
	loading: false, 
	message: "",
};

const battletagSlice = createSlice({
	name:     "battletag",
	initialState,
	reducers: {
		setAnus: (state: BattletagState, action: PayloadAction<boolean>) => {
			state.anus = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(testThunk.pending, state => {
				state.loading = true;
			})
			.addCase(testThunk.fulfilled, (state, action) => {
				state.loading = false;

				// state.message = action.payload as string;
			})
			.addCase(testThunk.rejected, (state, action) => {
				state.loading = false;

				state.message = action.payload as string;
			});
	},
});

export const selectBattletagAnus = (state: RootState) => state.battletag.anus;
export const selectLoading = (state: RootState) => state.battletag.loading;
export const selectMessage = (state: RootState) => state.battletag.message;

export const { setAnus, } = battletagSlice.actions;

export default battletagSlice.reducer;
