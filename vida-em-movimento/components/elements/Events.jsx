import FetchEvents from "../hooks/fetchEvents";
import SubHeading from "./SubHeading";

const Events = () => {
	return (
		<div>
			<SubHeading title="Upcoming events" />
			<FetchEvents />
		</div>
	);
};

export default Events;
