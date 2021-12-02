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

function EditAboutForm(props: any) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();

	//Fetching data from API
	const router = useRouter();
	const [data, setData] = useState<DataType>([]);
	const { id } = router.query;
	const URL = baseUrl + "abouts/1";

	useEffect(() => {
		axios
			.get(URL)
			.then((res) => {
				console.log(res.data);
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
		fetch(baseUrl + "abouts/1", requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
	};

	return (
		<>
			<Form className="edit-about" onSubmit={handleSubmit(submitForm)}>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Edit image</Form.Label>
					<Form.Control
						{...register(
							"image"
							//  { required: true }
						)}
						type="file"
						value={image}
						defaultValue={data.image}
					/>
				</Form.Group>

				{/* <Form.Group className="mb-3">
					<Form.Label>Edit Title</Form.Label>

					<Form.Control
						{...register("title", { required: true })}
						type="text"
						defaultValue={data.title}
						onChange={onTitleChange}
					/>
				</Form.Group> */}

				<Form.Group className="mb-3">
					<Form.Label>Edit text</Form.Label>
					<Form.Control
						{...register("description", { required: true })}
						as="textarea"
						rows={15}
						onChange={onDescriptionChange}
						defaultValue={data.description}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Update
				</Button>
			</Form>
		</>
	);
}

export default EditAboutForm;
