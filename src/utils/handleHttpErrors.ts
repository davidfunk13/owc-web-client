function handleHttpErrors(status: number) {
	switch (status) {
	case 401:
		console.log("hit 401");

		return "Unauthorized. Please log in to access this resource.";

	case 404:
		console.log("hit");

		return "Resource not found";
	default:
		return "Something went wrong handling the Http Status Error";
	}
}

export default handleHttpErrors;
