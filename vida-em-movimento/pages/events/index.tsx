import React from "react";
import Heading from "../../components/elements/Heading";
import FetchEvents from "../../components/hooks/fetchEvents";

const events = () => {
	return (
		<div>
			<Heading title="Events" />
			<FetchEvents />
		</div>
	);
};

export default events;
