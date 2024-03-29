import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import Image from "next/image";
import axios from "axios";

const FetchHome = () => {
	const [post, setPost] = useState([]);

	// const getHero = async () => {
	// 	const res = await fetch(baseUrl + "heroes");
	// 	const info = await res.json();
	// 	console.log(info);
	// };

	// const getHero = async () => {
	// 	await fetch(baseUrl + "heroes")
	// 		.then((response) => response.json())
	// 		.then((json) => setData(json));
	// };

	// console.log(data);

	useEffect(() => {
		axios
			.get(baseUrl + "heroes/")
			.then((res) => {
				// console.log(res);
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		// 	getHero();
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
