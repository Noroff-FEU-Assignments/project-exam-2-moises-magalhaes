import { Button } from "react-bootstrap";
import FetchEvents from "../hooks/fetchEvents";
import SubHeading from "./SubHeading";

const Events = () => {
	return (
		<div className="events">
			<SubHeading title="Upcoming events" />
			<FetchEvents />
			<Button>Check our events</Button>
		</div>
	);
};

export default Events;
