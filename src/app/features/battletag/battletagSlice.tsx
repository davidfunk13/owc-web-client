import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import IBattletagSliceState from "./IBattletagSliceState";

export const initialState: IBattletagSliceState = {
    battletags: []
};

export const battletagSlice = createSlice({
    name: "battletag",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase("");
    },
});

export const { } = battletagSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default battletagSlice.reducer;
