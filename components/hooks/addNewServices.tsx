import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Accordion, Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { baseUrl } from "../constants/api";

type FormValues = {
	image: string;
	title: string;
	description: string;
};

const AddNewServices = (props: any) => {
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
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onImageChange = (e: any) => setImage(e.target.files);
	const onTitleChange = (e: any) => setTitle(e.target.value);
	const onDescriptionChange = (e: any) => setDescription(e.target.value);

	const submitForm = (serviceData: any, e: any): any => {
		e.preventDefault();

		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);

		const data = { image, title, description };
		const requestOptions = {
			method: "POST",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch(baseUrl + "services/", requestOptions)
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
							<Form.Label>Add Title</Form.Label>

							<Form.Control
								{...register("title", { required: true })}
								type="text"
								placeholder="Enter title"
								onChange={onTitleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Add text</Form.Label>
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

export default AddNewServices;
