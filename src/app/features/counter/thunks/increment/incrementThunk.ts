import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "../../counterAPI";

const incrementThunk = createAsyncThunk(
    "counter/fetchCount",
    async (amount: number) => {
        const response = await fetchCount(amount);

        return response.data;
    }
);

export default incrementThunk;