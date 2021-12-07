function handleHttpErrors(status: number, reject: (value: unknown) => void) {
	switch (status) {
	case 401:
		console.log("hit 401");

		reject("Unauthorized. Please log in to access this resource.");

		return;
	case 404:
		console.log("hit");

		reject("Resource not found");

		return;
	default:
		reject("Something went wrong handling the Http Status Error");

		break;
	}
}

export default handleHttpErrors;
