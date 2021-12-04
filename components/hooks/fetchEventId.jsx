import axios from "axios";
import React, { useEffect, useState } from "react";
import { object } from "yup";
import { baseUrl } from "../constants/api";
import { useRouter } from "next/router";
import { Image } from "next/image";

const FetchEventId = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "events/" + id)
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
			<div className="events">
				<h2>{id}</h2>
				<p>{data.title}</p>
				<p>{data.description}</p>
				{/* <Image src={data.image.url} alt="training" /> */}
			</div>
		</>
	);
};

export default FetchEventId;
