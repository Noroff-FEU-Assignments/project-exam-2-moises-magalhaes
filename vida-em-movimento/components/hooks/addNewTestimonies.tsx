import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Accordion, Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

type FormValues = {
	image: string;
	name: string;
	surname: string;
	description: string;
};

const AddNewTestimonies = (props: any) => {
	// const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();

	// console.log(watch());

	const MyLocalStorage = (adminValue: string) => {
		const [value, setValue] = useState("");

		useEffect(() => setValue(localStorage.getItem("adminValue") || "{}"), []);

		return value;
	};

	const fetchAdmin = MyLocalStorage("admin");

	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const [description, setDescription] = useState("");

	const onImageChange = (e: any) => setImage(e.target.files);
	const onNameChange = (e: any) => setName(e.target.value);
	const onSurnameChange = (e: any) => setSurname(e.target.value);
	const onDescriptionChange = (e: any) => setDescription(e.target.value);
	const submitForm = (testimonyData: any, e: any): any => {
		e.preventDefault();

		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);

		const data = { image, name, surname, description };
		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch("http://localhost:1337/testimonies/", requestOptions)
			.then((response) => response.json())
			.then((res: void) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
		window.location.reload();
	};

	return (
		<>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Add</Accordion.Header>
				<Accordion.Body>
					<Form onSubmit={handleSubmit(submitForm)}>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Add image</Form.Label>
							<Form.Control
								{...register(
									"image"
									//  { required: true }
								)}
								type="file"
								value={image}
								placeholder="Enter image"
								// onChange={onImageChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Add name</Form.Label>

							<Form.Control
								{...register("name", { required: true })}
								type="text"
								placeholder="Enter name"
								onChange={onNameChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Add surname</Form.Label>

							<Form.Control
								{...register("surname", { required: true })}
								type="text"
								placeholder="Enter surname"
								onChange={onSurnameChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Add description</Form.Label>
							<Form.Control
								{...register("description", { required: true })}
								as="textarea"
								rows={3}
								placeholder="Write your service description"
								onChange={onDescriptionChange}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Add new service
						</Button>
					</Form>
				</Accordion.Body>
			</Accordion.Item>
		</>
	);
};

export default AddNewTestimonies;
