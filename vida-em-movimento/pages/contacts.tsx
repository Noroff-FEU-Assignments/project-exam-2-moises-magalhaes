import React from "react";
import ContactForm from "../components/elements/ContactForm";
import ContactMedia from "../components/elements/ContactMedia";
import Address from "../components/elements/Address";
import { Container } from "react-bootstrap";

const contacts = () => {
	return (
		<div className="contacts">
			<Container className="top-container">
				<ContactMedia />
				<ContactForm />
				<Address />
			</Container>
		</div>
	);
};

export default contacts;
