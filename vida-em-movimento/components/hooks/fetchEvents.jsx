import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";

const FetchEvents = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "events/")
			.then((res) => {
				console.log(res);
				setEvents(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="events">
				{events.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<p>{object.description}</p>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchEvents;

export const getStaticProps = async () => {};
