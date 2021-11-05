import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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

function EditAboutForm(props: any) {
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
			<Heading title="Edit Home section" />

			<Form>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Edit image</Form.Label>
					<Form.Control type="file" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Edit text</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Sumbmit change
				</Button>
			</Form>
		</>
	);
}

export default EditAboutForm;
