import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";

const FetchTestimonies = () => {
	const [testimonies, setTestimonies] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "testimonies/")
			.then((res) => {
				setTestimonies(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="testimonies cards">
				{testimonies.map((object) => (
					<Card key={object.id}>
						<Card.Body>
							<p>{object.description}</p>
							<p>
								{object.name} {object.surname}
							</p>
							<p>{object.trainingType}</p>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchTestimonies;
