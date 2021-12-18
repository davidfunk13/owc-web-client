import React from "react";

function Error({ error, }:any) {
	return (
		<div className={"container"}>
			<p>Ruh roh! {error.message}</p>
		</div>
	);
}

export default Error;
