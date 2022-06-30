import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import AuthState from "./AuthState";

export const initialState: AuthState = {
    isAuthenticated: false,
    user: undefined,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => { },
});

export const { setIsAuthenticated, setUser } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
