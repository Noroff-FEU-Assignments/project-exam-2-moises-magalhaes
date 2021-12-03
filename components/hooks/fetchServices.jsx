import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";
import Link from "next/link";

const FetchServices = (props) => {
	const [service, setService] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "services/")
			.then((res) => {
				// console.log(res);
				setService(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="services cards">
				{service.map((object) => (
					<Card key={object.id}>
						<Card.Body>
							<h3>{object.title}</h3>
							<p>{object.description}</p>
							<Link
								href={"/services-and-products/services/" + object.id}
								passHref
							>
								<Button>Find more about</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchServices;

export const getStaticProps = async () => {};
