import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";

const FetchServices = () => {
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
			<div className="services">
				{service.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<p>{object.description}</p>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchServices;

export const getStaticProps = async () => {};
