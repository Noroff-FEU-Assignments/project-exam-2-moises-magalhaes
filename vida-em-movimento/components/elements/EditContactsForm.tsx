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
	phoneNumber: number;
	facebook: string;
	instagram: string;
	whatsapp: number;
	app: string;
	address: string;
};

interface DataType {
	phoneNumber: number;
	facebook: string;
	instagram: string;
	whatsapp: number;
	app: string;
	address: string;
}

const schema = yup.object().shape({
	phoneNumber: yup.number(),
	// .required("Please enter an phoneNumber file"),
	// .email("Please enter a valid phoneNumber format"),
	instagram: yup
		.string()
		.required("Please enter your text")
		.min(8, "The text must be at least 8 characters"),
	facebook: yup
		.string()
		.required("Please enter your text")
		.min(10, "The text must be at least 10 characters"),
	whatsapp: yup
		.number()
		.required("Please change your whatsapp number")
		.min(8, "The text must be at least 8 characters"),
	app: yup
		.string()
		.required("Please enter your text")
		.min(10, "The text must be at least 10 characters"),
	address: yup
		.string()
		.required("Please enter your text")
		.min(10, "The text must be at least 10 characters"),
});

// login function

function EditContactsForm(props: any) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	//Fetching data from API
	const router = useRouter();
	const [data, setData] = useState<DataType[]>([]);

	const { id } = router.query;
	const URL = baseUrl + "contacts/1";

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

	const [phoneNumber, setphoneNumber] = useState("");
	const [facebook, setfacebook] = useState("");
	const [instagram, setInstagram] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [app, setApp] = useState("");
	const [address, setAddress] = useState("");

	const onPhoneNumberChange = (e: any) => setphoneNumber(e.target.files);
	const onFacebookChange = (e: any) => setfacebook(e.target.value);
	const onInstagramChange = (e: any) => setInstagram(e.target.value);
	const onWhatsappChange = (e: any) => setWhatsapp(e.target.value);
	const onAppChange = (e: any) => setApp(e.target.value);
	const onAddressChange = (e: any) => setAddress(e.target.value);

	const submitForm = (apiData: any, e: any) => {
		e.preventDefault();

		//get authorization
		const initialValue = localStorage.getItem("admin") || "{}";
		const saved = JSON.parse(initialValue);

		const data = { phoneNumber, facebook, instagram, whatsapp, app, address };
		const requestOptions = {
			method: "PUT",
			headers: {
				Authorization: "Bearer " + saved.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		fetch(baseUrl + "contacts/1", requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res))
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		alert("successful");
	};

	return (
		<>
			<Form className="edit-contact" onSubmit={handleSubmit(submitForm)}>
				<Form.Group className="mb-3">
					<Form.Label>Edit phone number</Form.Label>
					<Form.Control
						{...register("phoneNumber", { required: true })}
						type="text"
						onChange={onPhoneNumberChange}
						defaultValue={phoneNumber}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Edit instagram</Form.Label>
					<Form.Control
						{...register("instagram", { required: true })}
						type="text"
						onChange={onInstagramChange}
						defaultValue={instagram}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Edit facebook</Form.Label>
					<Form.Control
						{...register("facebook", { required: true })}
						type="text"
						onChange={onFacebookChange}
						defaultValue={facebook}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Edit whatsapp number</Form.Label>
					<Form.Control
						{...register("whatsapp", { required: true })}
						type="text"
						onChange={onWhatsappChange}
						defaultValue={instagram}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Edit address</Form.Label>
					<Form.Control
						{...register("address", { required: true })}
						type="text"
						onChange={onAddressChange}
						defaultValue={address}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Update
				</Button>
			</Form>
		</>
	);
}

export default EditContactsForm;
