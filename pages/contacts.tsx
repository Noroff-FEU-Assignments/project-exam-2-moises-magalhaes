import React from "react";
import ContactForm from "../components/elements/ContactForm";
import ContactMedia from "../components/elements/ContactMedia";
import Address from "../components/elements/Address";
import { Container } from "react-bootstrap";
import Heading from "../components/elements/Heading";

const contacts = () => {
	return (
		<div className="contacts">
			<Heading title="Contacts" />
			<Container className="top-container">
				<ContactMedia />
				<ContactForm />
				<Address />
			</Container>
		</div>
	);
};

export default contacts;
