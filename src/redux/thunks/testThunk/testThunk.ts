import ApiResponse from "../../../models/ApiResponse";
import { RootState, } from "../../rootReducer";
import axios from "../../../utils/axiosInstance";
import { createAsyncThunk, } from "@reduxjs/toolkit";
import handleHttpErrors from "../../../utils/handleHttpErrors";
import Axios, { AxiosError, AxiosResponse, } from "axios";

interface ProtectedResponse {
	msg: string
}

const testThunk = createAsyncThunk("battletag/protected",
	async (token: string, { rejectWithValue, getState, }) => {
		const state = getState() as RootState;

		console.log(token);

		let error;

		const res = await axios.get<ProtectedResponse>("/protected", { headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii14OWUtUmVUcHdBVm9vaVI3MGEwaCJ9.eyJpc3MiOiJodHRwczovL2Rldi12ZTBtNWEtMy51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDkwMDUxODc0MTU4OTY0NTExMjAiLCJhdWQiOlsiaHR0cHM6Ly9kZXYtdmUwbTVhLTMudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2Rldi12ZTBtNWEtMy51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjM4OTM0NDIzLCJleHAiOjE2MzkwMjA4MjMsImF6cCI6InNaWVV4a2tTeFZ1VnVNZHhwdm1paTZuT2wySUo1UWRRIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyJ9.W4JnbvJjYRGFoI1115EEk9StEEJUgIV50RMte6piLGfbfhTW3w0Z-ZXXnCmSPwVhgHMnI2ykvzM943suYm1wTdbQ0bqANd4w0E-9MuCDc32spHCAC6rMfNhwgPx7mk6HSdqCZfxGt2ivA5qgWaFiVFMSnbifkQGYwp8z98KLDTU9C0rjkiIRnJXBInG8FrHz4VJ9-oRuwjkAfuwK3dV0SZbSrQds14U0A4YKlT1_fUXc0Wcw1km0sPj4W2luM-UpY6rOnsnJoh7-BS9ht7FARoQ37mYQtG0B6huApnDaU0u2xXqHs2HAsA8Pk3RpR9sIo_z7jSwfzhxAtjCxUbgGyg`, }, })
			.catch((err: Error | AxiosError ) => {
				if (Axios.isAxiosError(err) && err.response && err.response.status){
					return error = err.response.status;
				} 

				if (!Axios.isAxiosError(err)){
					return "You done fucked.";
				}
			});

		if (error) {
			console.log({ error, });

			rejectWithValue("asspenis");
		}

		return res.data.msg;
	});

export default testThunk;
