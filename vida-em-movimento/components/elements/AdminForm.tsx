import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Router from "next/router";
import axios from "axios";
import { baseUrl } from "../constants/api";

const schema = yup.object().shape({
	email: yup
		.string()
		.required("Please enter an email address")
		.email("Please enter a valid email address"),
	password: yup
		.string()
		.required("Please enter your password")
		.min(8, "The password must be at least 8 characters"),
});

// login function

// function LoginForm({ Login }: any) {
function AdminForm(props: any) {
	// data fetching from api
	const [details, setDetails] = useState({
		email: "",
		password: "",
		login: false,
		token: "",
	});

	const [error, setError] = useState(null);

	//handling onSubmit form
	const submitForm: any = async (data: any) => {
		const options = {
			method: "POST",
			body: JSON.stringify({
				identifier: details.email,
				password: details.password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		};

		const URL = baseUrl + "auth/local";

		const response = await fetch(URL, options);
		const json = await response.json().then((result) => {
			if (result.message) {
				setError(result.message[0].message);
			} else {
				localStorage.setItem(
					"admin",
					JSON.stringify({
						login: true,
						token: result.jwt,
					})
				);
				setDetails({
					email: details.email,
					login: true,
					token: result.jwt,
					password: details.password,
				});
			}
		});
		Router.push("/dashboard");
	};

	type FormValues = {
		email: string;
		password: string;
		checkbox: boolean;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	return (
		<>
			<Heading title="Admin Login" />
			<div className="wrapper">
				<Container className="admin-page">
					<Form onSubmit={handleSubmit(submitForm)}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								{...register("email", { required: true })}
								type="email"
								placeholder="Enter email"
								onChange={(e) =>
									setDetails({ ...details, email: e.target.value })
								}
							/>
							{errors.email && <p>{errors.email?.message}</p>}
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								{...register("password", {
									required: true,
									minLength: 8,
								})}
								type="password"
								placeholder="Password"
								onChange={(e) =>
									setDetails({ ...details, password: e.target.value })
								}
								value={details.password}
							/>
							{errors.password && <p>{errors.password?.message}</p>}
						</Form.Group>
						{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						{...register("checkbox")}
						type="checkbox"
						label="keep me signed"
					/>
				</Form.Group> */}

						<Button variant="primary" type="submit">
							Login
						</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}

export default AdminForm;
