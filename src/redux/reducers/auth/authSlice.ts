import { RootState, } from "../../rootReducer";
import testThunk from "../../thunks/testThunk/testThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface IAuthSliceState {
    token: string
	message: string
	loading: boolean
}

const initialState: IAuthSliceState = {
	token:   "",
	message: "", 
	loading: false,
};

const authSlice = createSlice({
	name:     "auth",
	initialState,
	reducers: {
		setToken: (state: IAuthSliceState, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setMessage: (state: IAuthSliceState, action: PayloadAction<string>) => {
			state.message = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(testThunk.pending, state => {
				state.loading = true;
			})
			.addCase(testThunk.fulfilled, (state, action) => {
				state.loading = false;

				state.message = action.payload;
			})
			.addCase(testThunk.rejected, (state, action) => {
				state.loading = false;

				state.message = action.payload as string;
			});
	},
});

export const selectMessage = (state: RootState) => state.auth.message;
export const selectToken = (state: RootState) => state.auth.token;
export const selectLoading = (state: RootState) => state.auth.loading;

export const { setToken, setMessage, } = authSlice.actions;

export default authSlice.reducer;
