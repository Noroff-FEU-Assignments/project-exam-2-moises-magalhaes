import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../constants/api";

const UpdateProduct = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

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
						<Link href={"/dashboard/edit-products/" + object.id} passHref>
							<Button>Update product</Button>
						</Link>
					</Card>
				))}
			</div>
		</>
	);
};

export default UpdateProduct;
