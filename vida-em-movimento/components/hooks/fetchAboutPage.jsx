import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";

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
				{about.map((object) => (
					<div key={object.id}>
						<p>{object.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default FetchAboutPage;
