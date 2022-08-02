
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import BattletagState from "./SelectedBattletagState";

export const initialState: BattletagState = {
    selected: JSON.parse(localStorage.getItem("_b") as string) ?? undefined
};

export const selectedBattletagSlice = createSlice({
    name: "selectedBattletag",
    initialState,
    reducers: {
        setSelected: (state, action) => { 
            localStorage.setItem("_b", JSON.stringify(action.payload));
            state.selected = action.payload;
        }
    },
    extraReducers: (builder) => { },
});

export const { setSelected } = selectedBattletagSlice.actions;

export const selectedBattletag = (state: RootState) => state.selectedBattletag.selected;

export default selectedBattletagSlice.reducer;
