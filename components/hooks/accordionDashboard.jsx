import React from "react";
import { Accordion, Container } from "react-bootstrap";
import EditAboutForm from "../elements/EditAboutForm";
import EditContactsForm from "../elements/EditContactsForm";
import EditProductsForm from "../elements/EditProductsForm";
import EditHomeForm from "../elements/EditHomeForm";
import EditServicesForm from "../elements/EditServicesForm";
import EditTestimoniesForm from "../elements/EditTestimoniesForm";
import EditEventsForm from "../elements/EditEventsForm";

const AccordionDashboard = () => {
	return (
		<>
			<div className="mobile">
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header> Edit Home</Accordion.Header>
						<Accordion.Body>
							<EditHomeForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header> Edit Testimonies</Accordion.Header>
						<Accordion.Body>
							<EditTestimoniesForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header> Edit About</Accordion.Header>
						<Accordion.Body>
							<EditAboutForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header> Edit Services</Accordion.Header>
						<Accordion.Body>
							<EditServicesForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header> Edit Products</Accordion.Header>
						<Accordion.Body>
							<EditProductsForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header> Edit Contacts</Accordion.Header>
						<Accordion.Body>
							<EditContactsForm />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="6">
						<Accordion.Header> Edit Events</Accordion.Header>
						<Accordion.Body>
							<EditEventsForm />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</>
	);
};

export default AccordionDashboard;
