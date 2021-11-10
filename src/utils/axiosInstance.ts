import axios from "axios";
console.log(process.env.REACT_APP_API_URI);

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" 
		? process.env.REACT_APP_API_URI + "/api"
		: "/api",
});

export default instance;
