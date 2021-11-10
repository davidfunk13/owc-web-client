import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URI + "/api" : "/api",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar", },
});

export default instance;
