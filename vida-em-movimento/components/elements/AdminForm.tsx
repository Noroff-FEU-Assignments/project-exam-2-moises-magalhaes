import React, { SyntheticEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useRouter } from "next/router";
import { baseUrl } from "../constants/api";

const schema = yup.object().shape({
	password: yup
		.string()
		.required("Please enter your password")
		.min(8, "The password must be at least 8 characters"),
});

const AdminForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	type FormValues = {
		email: string;
		password: string;
		checkbox: boolean;
	};

	console.log(errors);

	const submitForm = async (e: SyntheticEvent) => {
		e.preventDefault();
		console.log(e);

		await fetch(baseUrl + "auth/local", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({
				email,
				password,
			}),
		});
	};

	return (
		<>
			<Heading title="Login Form" />

			<Form onSubmit={submitForm}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						{...register("email", { required: true })}
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && <p>{errors.email?.message}</p>}
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control
						{...register("password", { required: true })}
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && <p>{errors.password?.message}</p>}
				</Form.Group>
				<Form.Group className="mb-3" controlId="Checkbox1">
					<Form.Check
						{...register("checkbox")}
						type="checkbox"
						label="keep me signed"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AdminForm;
