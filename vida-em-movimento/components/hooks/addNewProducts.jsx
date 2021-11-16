import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Accordion, Alert, Button, Form } from "react-bootstrap";

const AddNewProducts = () => {
	//getting authorization
	const router = useRouter();

	const UseLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");

		useEffect(() => {
			setValue(localStorage.getItem(adminValue));
		}, []);

		return value;
	};

	const fetchAdmin = UseLocalStorage("admin");
	console.log(fetchAdmin);

	if (fetchAdmin === null || undefined) {
		router.push("/admin");
	}

	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onImageChange = (e) => setImage(e.target.value);
	const onTitleChange = (e) => setTitle(e.target.value);
	const onDescriptionChange = (e) => setDescription(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = { image, title, description };
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		fetch("http://localhost:1337/services/", requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res));
	};

	return (
		<>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Add</Accordion.Header>
				<Accordion.Body>
					<Form onSubmit={handleSubmit}>
						{" "}
						{fetchAdmin !== "" ? (
							<>
								<Form.Group controlId="formFile" className="mb-3">
									<Form.Label>Add image</Form.Label>
									<Form.Control
										type="file"
										value={image}
										onChange={onImageChange}
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Add Title</Form.Label>

									<Form.Control
										type="text"
										placeholder="Normal text"
										value={title}
										onChange={onTitleChange}
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Add text</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Write your service description"
										value={description}
										onChange={onDescriptionChange}
										required
									/>
								</Form.Group>
								<Button variant="primary" type="submit">
									Sumbmit change
								</Button>
							</>
						) : (
							<Alert
								variant="danger"
								onClose={() => setShow(false)}
								dismissible
							>
								<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
								<p>
									Change this and that and try again. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget lacinia odio
									sem nec elit. Cras mattis consectetur purus sit amet
									fermentum.
								</p>
							</Alert>
						)}
					</Form>
				</Accordion.Body>
			</Accordion.Item>
		</>
	);
};

export default AddNewProducts;
