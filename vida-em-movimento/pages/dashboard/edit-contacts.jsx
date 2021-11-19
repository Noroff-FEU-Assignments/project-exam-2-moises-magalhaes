import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";
import EditContactsForm from "../../components/elements/EditContactsForm";

const EditContacts = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<EditContactsForm />
				<Logout />
			</Container>
		</div>
	);
};

export default EditContacts;
