import axios from "axios";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { baseUrl } from "../constants/api";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Card, Container } from "react-bootstrap";

const FetchServiceId = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "services/" + id)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<>
			<Heading title="Service" />

			<Container>
				<div className="service">
					<Card>
						<Card.Body>
							<h2>{data.title}</h2>
							<p>{data.description}</p>
							{/* <Image src={data.image.url} alt="training" /> */}
						</Card.Body>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default FetchServiceId;
