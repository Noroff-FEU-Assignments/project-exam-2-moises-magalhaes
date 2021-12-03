import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../components/elements/Heading";
import FetchEvents from "../../components/hooks/fetchEvents";

const events = () => {
	return (
		<Container>
			<Heading title="Events" />
			<FetchEvents />
		</Container>
	);
};

export default events;
