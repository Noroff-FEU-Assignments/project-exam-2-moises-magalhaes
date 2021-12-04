import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";
import Link from "next/link";

const FetchEvents = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "events/")
			.then((res) => {
				setEvents(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="event cards">
				{events.map((object) => (
					<Card key={object.id}>
						<Card.Body>
							<h3>{object.title}</h3>
							<p>{object.date}</p>
							<p>{object.time}</p>
							<p>{object.description}</p>
							<Link href={"/events/" + object.id} passHref>
								<Button className="btn-secondary">Read more</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchEvents;
