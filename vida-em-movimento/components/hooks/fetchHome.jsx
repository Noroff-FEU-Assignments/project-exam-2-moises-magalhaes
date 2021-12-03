import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import Image from "next/image";
import axios from "axios";

const FetchHome = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios
			.get(baseUrl + "heroes/")
			.then((res) => {
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{post.map((object) => (
				<div key={object.id} className="hero-banner">
					<h1>{object.title}</h1>
					<p>{object.description}</p>
					{/* <Image
						src={object.image.url}
						width={200}
						height={200}
						alt="woman working out"
					/> */}
				</div>
			))}
		</>
	);
};

export default FetchHome;
