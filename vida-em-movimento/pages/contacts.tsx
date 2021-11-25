import React from "react";
import ContactForm from "../components/elements/ContactForm";
import ContactMedia from "../components/elements/ContactMedia";
import Address from "../components/elements/Address";

const contacts = () => {
	return (
		<div className="contacts">
			<ContactMedia />
			<ContactForm />
			<Address />
		</div>
	);
};

export default contacts;
