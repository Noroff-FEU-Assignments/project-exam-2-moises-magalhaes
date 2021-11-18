import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "../constants/api";
import { useForm } from "react-hook-form";

const UpdateEvent = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const [Event, setEvent] = useState([]);
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
			.get(baseUrl + "Events/")
			.then((res) => {
				// console.log(res);
				setEvent(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="Events">
				{Event.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<h3>{object.id}</h3>
						<p>{object.date}</p>
						<p>{object.time}</p>
						<p>{object.description}</p>
						{/* <Link
							href={"/Events-and-products/Events/" + object.id}
							passHref
						>
							<Button>edit</Button>
						</Link> */}
						<Link href={"/dashboard/edit-Events/" + object.id} passHref>
							<Button>Update Event</Button>
						</Link>
					</Card>
				))}
			</div>
		</>
	);
};

export default UpdateEvent;
