import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import CounterState from "./CounterSliceState";
import incrementThunk from "./thunks/increment/incrementThunk";

export const initialState: CounterState = {
    value: 0,
    status: "idle",
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(incrementThunk.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            })
            .addCase(incrementThunk.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
