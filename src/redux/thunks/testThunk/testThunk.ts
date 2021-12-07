import ApiResponse from "../../../models/ApiResponse";
import { RootState, } from "../../rootReducer";
import axios from "../../../utils/axiosInstance";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import handleHttpErrors from "../../../utils/handleHttpErrors";

interface ProtectedResponse {
    msg: string
}

const testThunk = createAsyncThunk("auth/protected",
	async (_, { rejectWithValue, getState, }) => {
		const state = getState() as RootState;

		const token = state.auth.token;

		const res = await axios.get("/prtected",{ headers: { Authorization: `Bearer ${token}`, }, }).catch(err => rejectWithValue(JSON.stringify(err)));

		console.log(res);

		// handleHttpErrors(res.status, rejectWithValue);
		
		return res;
	});

export default testThunk;
