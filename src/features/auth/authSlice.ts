import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import AuthState from "./AuthState";

export const initialState: AuthState = {
    isAuthenticated: false,
    token: undefined,
    user: undefined,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => { },
});

export const { setToken } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
