import React from "react";
import { Button, Form } from "react-bootstrap";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	email: yup
		.string()
		.required("Please enter an email address")
		.email("Please enter a valid email address"),
	password: yup
		.string()
		.required("Please enter your password")
		.min(10, "The message must be at least 8 characters"),
});

const LoginForm = () => {
	type FormValues = {
		email: string;
		password: string;
		checkbox: boolean;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	console.log(errors);

	function submitForm(data: any) {
		console.log(data);
	}

	return (
		<>
			<Heading title="Login Form" />

			<Form onSubmit={handleSubmit(submitForm)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						{...register("email", { required: true })}
						type="email"
						placeholder="Enter email"
					/>
					{errors.email && <p>Email is required</p>}
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
					/>
					{errors.password && <p>Password is required</p>}
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
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

export default LoginForm;
