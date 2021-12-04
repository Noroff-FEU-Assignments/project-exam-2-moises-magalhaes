import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import SubHeading from "./SubHeading";

const ContactForm = () => {
	return (
		<Card>
			<Card.Body>
				<Form>
					<SubHeading title="Send email" />
					<Form.Group className="mb-3">
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Enter name" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Enter subject" />
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Enter text here"
						/>
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
