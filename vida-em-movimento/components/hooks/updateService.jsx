import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../constants/api";
import { useForm } from "react-hook-form";

const UpdateService = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [service, setService] = useState([]);
	const [status, setStatus] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const MyLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");

		useEffect(
			() => setValue(localStorage.getItem(adminValue) || "{}"),
			[adminValue]
		);

		return value;
	};

	MyLocalStorage("admin");

	useEffect(() => {
		axios
			.get(baseUrl + "services/")
			.then((res) => {
				setService(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="services">
				{service.map((object) => (
					<Card key={object.id}>
						<Card.Body>
							<h3>{object.title}</h3>
							<h3>{object.id}</h3>
							<p>{object.description}</p>

							<Link href={"/dashboard/edit-services/" + object.id} passHref>
								<Button>Update service</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default UpdateService;
