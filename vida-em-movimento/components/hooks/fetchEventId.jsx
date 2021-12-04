import axios from "axios";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { baseUrl } from "../constants/api";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Card, Container } from "react-bootstrap";
import Heading from "../elements/Heading";

const FetchEventId = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "events/" + id)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<>
			<Heading title="Event" />
			<Container>
				<div className="event">
					<Card>
						<Card.Body>
							<h2>{data.title}</h2>
							<p>{data.description}</p>
							<p>{data.price}</p>

							{/* <Image src={data.image.url} alt="training" /> */}
						</Card.Body>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default FetchEventId;
