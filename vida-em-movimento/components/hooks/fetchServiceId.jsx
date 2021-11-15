import axios from "axios";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { baseUrl } from "../constants/api";
import { useRouter } from "next/router";
import { Image } from "next/image";

// export const GetStaticPaths = async () => {
// 	const res = await fetch(baseUrl + "services");
// 	const data = await res.json();

// 	const paths = data.map((object) => {
// 		return {
// 			params: { id: object.id.toString() },
// 		};
// 	});
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps = async (context) => {
// 	const id = context.params.id;
// 	const res = await fetch(baseUrl + "services" + id);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			object: data,
// 		},
// 	};
// };

const FetchServiceId = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "services/" + id)
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
			<div className="service">
				<h2>{id}</h2>
				<p>{data.title}</p>
				<p>{data.description}</p>
				{/* <Image src={data.image.url} alt="training" /> */}
			</div>
		</>
	);
};

export default FetchServiceId;