import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../components/constants/api";
import Router from "next/router";

const EditIdPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	//Fetching data from API
	const router = useRouter();
	const [data, setData] = useState([]);
	const { id } = router.query;
	const URL = baseUrl + "testimonies/" + id;

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

	const MyLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");

		useEffect(
			() => setValue(localStorage.getItem(adminValue) || "{}"),
			[adminValue]
		);

		return value;
	};

	MyLocalStorage("admin");

	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const [description, setDescription] = useState("");

	const onImageChange = (e) => setImage(e.target.files);
	const onNameChange = (e) => setName(e.target.value);
	const onSurnameChange = (e) => setSurname(e.target.value);
	const onDescriptionChange = (e) => setDescription(e.target.value);

	const submitForm = (apiData, e) => {
		e.preventDefault();

		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);

		const data = { image, name, description, surname };
		const requestOptions = {
			method: "PUT",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch(baseUrl + "testimonies/" + id, requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
	};

	//delete product
	const deleteForm = (id, e) => {
		e.preventDefault();
		console.log(id);

		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);
		const data = { id };
		const requestOptions = {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		fetch(baseUrl + "testimonies/" + id, requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
		Router.push("/dashboard/edit-testimonies");
	};

	return (
		<>
			<Form className="edit-testimonies" onSubmit={handleSubmit(submitForm)}>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Edit image</Form.Label>
					<Form.Control
						{...register(
							"image"
							//  { required: true }
						)}
						type="file"
						placeholder={data.image}
						value={image}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Add name</Form.Label>

					<Form.Control
						{...register("name", { required: true })}
						type="text"
						defaultValue={data.name}
						onChange={onNameChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Add surname</Form.Label>

					<Form.Control
						{...register("surname", { required: true })}
						type="text"
						defaultValue={data.surname}
						onChange={onSurnameChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Edit description</Form.Label>
					<Form.Control
						{...register("description", { required: true })}
						as="textarea"
						rows={3}
						defaultValue={data.description}
						onChange={onDescriptionChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Update
				</Button>
			</Form>
			<Button
				onClick={(e) => deleteForm(data.id, e)}
				variant="secondary"
				type="submit"
			>
				Delete
			</Button>
		</>
	);
};

export default EditIdPage;
