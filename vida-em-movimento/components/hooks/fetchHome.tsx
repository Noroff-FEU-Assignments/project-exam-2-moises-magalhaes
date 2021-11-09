import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import Image from "next/Image";
// import Card from "react-bootstrap";

const FetchHome = () => {
	const [data, setData] = useState();
	const [error, setError] = useState(null);

	useEffect(() => {
		asyncFunction();
	}, []);

	const asyncFunction = async () => {
		await fetch(baseUrl + "heroes/")
			.then((response) => {
				if (!response.ok) {
					throw Error("Ocorreu um erro, por favor volte mais tarde");
				}
				return response.json();
			})
			.then((json) => setData(json))
			.catch((err) => {
				setError(err.message);
			});
	};

	console.log(data);

	return (
		<div className="hero-banner">
			{/* {error && <div className="error">{error}</div>}
			{data.map((obj: any) => (
				<Image
					src={baseUrl + obj.data.image}
					width={200}
					height={200}
					key="1"
					alt="woman working out"
				/>
			))} */}
			{/* <Image src={}
			 */}
		</div>
	);
};

export default FetchHome;

// //fetching products from api
// export const FetchingHome = () => {
// 	const [data, setData] = useState();

// 	const asyncFunction = async () => {
// 		await fetch(baseUrl + "heroes/")
// 			.then((response) => response.json())
// 			.then((json) => setData(json));
// 	};

// 	useEffect(() => {
// 		asyncFunction();
// 	}, []);

// 	console.log(data);

// 	return (
// 		<>
// 			<div className="heroHome">
//        {/* {data.map((hero) => {
// 					<div>{hero.title}</div>;
// 				})} */}
// 			</div>
// 		</>
// 	);
// };
