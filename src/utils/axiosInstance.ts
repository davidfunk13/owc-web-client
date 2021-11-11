import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" 
		? process.env.REACT_APP_API_URI + "/api"
		: "/api",
});

export default instance;
