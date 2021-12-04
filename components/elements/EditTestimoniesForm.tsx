import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import AddNewtestimonies from "../hooks/addNewTestimonies";
import UpdateTestimony from "../hooks/updateTestimony";

const EditTestimoniesForm = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0" flush>
				<AddNewtestimonies />
				<Accordion.Item eventKey="1">
					<Accordion.Header>Edit</Accordion.Header>
					<Accordion.Body>
						<UpdateTestimony />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default EditTestimoniesForm;
