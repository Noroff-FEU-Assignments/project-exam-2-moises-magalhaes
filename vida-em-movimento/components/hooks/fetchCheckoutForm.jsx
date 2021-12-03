import React from "react";
import { Button, Form, Row } from "react-bootstrap";

const FetchCheckoutForm = () => {
	return (
		<>
			<Row>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" />
				</Form.Group>
			</Row>
			<Row>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter Email" />
				</Form.Group>
			</Row>
			<Row>
				<Form.Group className="mb-3" controlId="formBasicAddress">
					<Form.Label>Adress</Form.Label>
					<Form.Control type="text" placeholder="Enter Address" />
				</Form.Group>
			</Row>
			<Row>
				<Form.Group className="mb-3" controlId="formBasicCity">
					<Form.Label>City</Form.Label>
					<Form.Control type="text" placeholder="Enter City" />
				</Form.Group>
			</Row>
			<Row>
				<Form.Group className="mb-3" controlId="formBasicPostalCode">
					<Form.Label>Postal Code</Form.Label>
					<Form.Control type="text" placeholder="Enter PostalCode" />
				</Form.Group>
			</Row>
		</>
	);
};

export default FetchCheckoutForm;
