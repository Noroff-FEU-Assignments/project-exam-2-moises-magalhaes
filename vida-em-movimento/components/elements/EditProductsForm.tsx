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
			</Accordion>
		</div>
	);
};

export default EditProductsForm;
