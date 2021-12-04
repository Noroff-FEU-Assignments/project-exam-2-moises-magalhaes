import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import SubHeading from "./SubHeading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Router, { useRouter } from "next/router";

const schema = yup.object().shape({
	email: yup
		.string()
		.required("Please enter an email address")
		.email("Please enter a valid email address"),
	name: yup
		.string()
		.required("Please enter your name")
		.min(3, "The password must be at least 3 characters"),
});

const ContactForm = () => {
	const [details, setDetails] = useState({
		email: "",
		name: "",
		subject: "",
		text: "",
	});

	type FormValues = {
		email: string;
		name: string;
		subject: string;
		text: string;
		onClick: void;
	};

	const submitForm: any = (_data: any, e: any) => {
		e.preventDefault();
		alert("Email sent");
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	return (
		<Card>
			<Card.Body>
				<Form onSubmit={handleSubmit(submitForm)}>
					<SubHeading title="Send email" />
					<Form.Group className="mb-3">
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

					<Form.Group className="mb-3">
						<Form.Control
							{...register("name", { required: true })}
							type="text"
							placeholder="Enter name"
							onChange={(e) => setDetails({ ...details, name: e.target.value })}
						/>
						{errors.name && <p>{errors.name?.message}</p>}
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control
							{...register("subject", { required: true })}
							type="text"
							placeholder="Enter subject"
							onChange={(e) =>
								setDetails({ ...details, subject: e.target.value })
							}
						/>
						{errors.subject && <p>{errors.subject?.message}</p>}
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control
							{...register("text", { required: true })}
							type="textarea"
							placeholder="Enter text here"
							onChange={(e) => setDetails({ ...details, text: e.target.value })}
						/>
						{errors.text && <p>{errors.text?.message}</p>}
					</Form.Group>

					<Button variant="primary" type="submit">
						Send email
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ContactForm;
