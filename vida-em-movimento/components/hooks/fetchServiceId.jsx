import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";

const FetchServiceId = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(baseUrl + "services/")
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="service">
				{data.map((object) => (
					<div key={object.id}>
						<p>{object.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default FetchServiceId;
