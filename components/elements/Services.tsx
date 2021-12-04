import React from "react";
import FetchServices from "../hooks/fetchServices";
import SubHeading from "./SubHeading";

const Services = () => {
	return (
		<>
			<SubHeading title="Services" />
			<FetchServices />
		</>
	);
};

export default Services;
