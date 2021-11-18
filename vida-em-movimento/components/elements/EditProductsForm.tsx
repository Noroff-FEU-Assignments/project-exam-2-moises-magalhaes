import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import AddNewProducts from "../hooks/addNewProducts";
import UpdateProduct from "../hooks/updateProduct";

const EditProductsForm = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0" flush>
				<AddNewProducts />
				<Accordion.Item eventKey="1">
					<Accordion.Header>Edit</Accordion.Header>
					<Accordion.Body>
						<UpdateProduct />
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Remove</Accordion.Header>
					<Accordion.Body>
						<Form>
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Label>Remove product</Form.Label>
							</Form.Group>

							<Button variant="primary" type="submit">
								Remove
							</Button>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default EditProductsForm;
