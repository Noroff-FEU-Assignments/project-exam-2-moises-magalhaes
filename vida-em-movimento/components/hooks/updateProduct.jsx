import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../constants/api";

const UpdateProduct = () => {
	const [product, setProduct] = useState([]);
	const [status, setStatus] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const MyLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");

		useEffect(() => setValue(localStorage.getItem(adminValue) || "{}"), []);

		return value;
	};

	MyLocalStorage("admin");

	useEffect(() => {
		axios
			.get(baseUrl + "products/")
			.then((res) => {
				// console.log(res);
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const submitEdit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);
	}, []);

	const submitDelete = (e) => {
		e.preventDefault();

		// DELETE request
		const headers = {
			Authorization: "Bearer " + saved.token,
			"Content-Type": "application/json",
		};

		const data = { product };
		const requestOptions = {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		fetch(`http://localhost:1337/products/${id}`, requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});

		// axios
		// 	.delete(`http://localhost:1337/products/${id}`, { headers })
		// 	.then(() =>
		// 		setStatus(alert("successful deleted")).catch((error) => {
		// 			setErrorMessage(error.message);
		// 			console.log("There was an error!", error);
		// 		})
		// 	);
	};

	return (
		<>
			<div className="products">
				{product.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<h3>{object.id}</h3>
						<p>{object.description}</p>

						{/* <Link
							href={"/services-and-products/products/" + object.id}
							passHref
						>
							<Button>edit</Button>
						</Link> */}
						<Button variant="primary" type="submit" onSubmit={submitEdit}>
							Update
						</Button>
						<Button variant="secondary" type="submit" onSubmit={submitDelete}>
							Delete
						</Button>
					</Card>
				))}
			</div>
		</>
	);
};

export default UpdateProduct;
