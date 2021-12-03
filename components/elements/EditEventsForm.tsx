import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import AddNewEvents from "../hooks/addNewEvents";
import UpdateEvent from "../hooks/updateEvent";

const EditProductsForm = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0" flush>
				<AddNewEvents />
				<Accordion.Item eventKey="1">
					<Accordion.Header>Edit</Accordion.Header>
					<Accordion.Body>
						<UpdateEvent />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default EditProductsForm;
