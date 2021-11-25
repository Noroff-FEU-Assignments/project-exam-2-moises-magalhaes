import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import Image from "next/image";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

import guy from "../images/pexels-andres-ayrton-6551055.jpg";

const FetchAboutPage = () => {
	const [about, setAbout] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "abouts/")
			.then((res) => {
				console.log(res.data);
				setAbout(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="About">
				<Image src={guy} alt="man running" />
				<Container>
					{about.map((object) => (
						<div key={object.id}>
							<p>{object.description}</p>
						</div>
					))}
					<Link href="/services-and-products/services/" passHref>
						<Button>Find more about</Button>
					</Link>
				</Container>
			</div>
		</>
	);
};

export default FetchAboutPage;
