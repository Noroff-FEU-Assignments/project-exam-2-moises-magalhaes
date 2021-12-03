import React from "react";
import Heading from "../components/elements/Heading";
import FetchAboutPage from "../components/hooks/fetchAboutPage";

function about() {
	return (
		<>
			<Heading title="About us" />
			<FetchAboutPage />
		</>
	);
}

export default about;
