import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import AddNewServices from "../hooks/addNewServices";
import UpdateService from "../hooks/updateService";

const EditServicesForm = () => {
	return (
		<div>
			<Accordion defaultActiveKey="0" flush>
				<AddNewServices />
				<Accordion.Item eventKey="1">
					<Accordion.Header>Edit</Accordion.Header>
					<Accordion.Body>
						<UpdateService />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default EditServicesForm;
