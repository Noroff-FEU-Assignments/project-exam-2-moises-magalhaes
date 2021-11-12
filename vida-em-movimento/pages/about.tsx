import React from "react";
import Heading from "../components/elements/Heading";
import FetchAboutPage from "../components/hooks/fetchAboutPage";

function about() {
	return (
		<div>
			<Heading title="About us" />
			<FetchAboutPage />
		</div>
	);
}

export default about;
