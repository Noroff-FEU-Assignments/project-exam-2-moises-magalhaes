import React from "react";
import FetchTestimonies from "../hooks/fetchTestimonies";
import SubHeading from "./SubHeading";

const Testimonies = () => {
	return (
		<>
			<SubHeading title="Testimonies" />
			<FetchTestimonies />
		</>
	);
};

export default Testimonies;
