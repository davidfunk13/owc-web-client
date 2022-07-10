import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import IBattletagSliceState from "./IBattletagSliceState";

export const initialState: IBattletagSliceState = {
    battletags: []
};

export const battletagSlice = createSlice({
    name: "battletag",
    initialState,
    reducers: {}
});

export const selectCount = (state: RootState) => state.counter.value;

export default battletagSlice.reducer;
