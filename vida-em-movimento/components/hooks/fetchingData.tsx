import { useEffect, useState } from "react";
import { baseUrl } from "../constants/api";

//fetching products from api
export const FetchingData = () => {
	const [data, setData] = useState();

	const asyncFunction = async () => {
		await fetch(baseUrl + "products/")
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	useEffect(() => {
		asyncFunction();
	}, []);

	// console.log(data);

	// first method
	// const response = await fetch(baseUrl + "products/");
	// // console.log(response);

	// const fetchedProducts = await response.json();
	// // console.log(fetchedProducts);

	// const [item] = fetchedProducts;
	// console.log(item);

	// setData(fetchedProducts);
	// };

	return (
		<>
			<div className="products">
				{/* {data.map((product) => {
					<div>{product.title}</div>;
				})} */}
			</div>
		</>
	);
};
