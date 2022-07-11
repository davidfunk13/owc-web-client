import { createSlice } from "@reduxjs/toolkit";
import IBattletagSliceState from "./IBattletagSliceState";

export const initialState: IBattletagSliceState = {
    battletags: []
};

export const battletagSlice = createSlice({
    name: "battletag",
    initialState,
    reducers: {}
});

export default battletagSlice.reducer;
