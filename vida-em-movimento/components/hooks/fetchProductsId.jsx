import axios from "axios";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { baseUrl } from "../constants/api";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Card, Container } from "react-bootstrap";

const FetchProductId = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "my-products/" + id)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<>
			<Heading title="Product" />

			<Container>
				<div className="product">
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

export default FetchProductId;
