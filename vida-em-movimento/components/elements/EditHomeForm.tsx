import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../constants/api";

type FormValues = {
	image: string;
	title: string;
	description: string;
};

interface DataType {
	image: string;
	description: string;
	title: string;
}

const schema = yup.object().shape({
	image: yup.string(),
	// .required("Please enter an image file"),
	// .email("Please enter a valid image format"),
	description: yup
		.string()
		.required("Please enter your text")
		.min(100, "The text must be at least 100 characters"),
});

// login function

function EditHomeForm(props: any) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	//Fetching data from API
	const router = useRouter();
	const [data, setData] = useState<DataType[]>([]);
	const { id } = router.query;
	const URL = baseUrl + "Heroes/1";

	useEffect(() => {
		axios
			.get(URL)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [URL]);

	//Posting data to API

	const MyLocalStorage = (adminValue: any) => {
		const [value, setValue] = useState("");

		useEffect(
			() => setValue(localStorage.getItem(adminValue) || "{}"),
			[adminValue]
		);

		return value;
	};

	MyLocalStorage("admin");

	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onImageChange = (e: any) => setImage(e.target.files);
	const onTitleChange = (e: any) => setTitle(e.target.value);
	const onDescriptionChange = (e: any) => setDescription(e.target.value);

	const submitForm = (apiData: any, e: any) => {
		e.preventDefault();

		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);

		const data = { image, title, description };
		const requestOptions = {
			method: "PUT",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch(baseUrl + "heroes/1", requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
	};

	return (
		<>
			<Form className="edit-hero" onSubmit={handleSubmit(submitForm)}>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Edit image</Form.Label>
					<Form.Control
						{...register("image")}
						type="file"
						defaultValue={image}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Edit Title</Form.Label>

					<Form.Control
						{...register("title", { required: true })}
						type="text"
						defaultValue={title}
						onChange={onTitleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Edit text</Form.Label>
					<Form.Control
						{...register("description", { required: true })}
						as="textarea"
						rows={15}
						onChange={onDescriptionChange}
						defaultValue={description}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Update
				</Button>
			</Form>
		</>
	);
}

export default EditHomeForm;
