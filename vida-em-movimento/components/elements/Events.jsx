import { Button } from "react-bootstrap";
import FetchEvents from "../hooks/fetchEvents";
import SubHeading from "./SubHeading";

const Events = () => {
	return (
		<div className="events">
			<SubHeading title="Upcoming events" />
			<FetchEvents />
			<Button>Find more about</Button>
		</div>
	);
};

export default Events;
