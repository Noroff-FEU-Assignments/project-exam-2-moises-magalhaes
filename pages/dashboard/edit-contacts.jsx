import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";
import EditContactsForm from "../../components/elements/EditContactsForm";
import Heading from "../../components/elements/Heading";

const EditContacts = () => {
	return (
		<div className="dash-page">
			<div className="welcome-dashboard">
				<Container className="welcome">
					<Heading title="Welcome Admin" />
					<Logout />
				</Container>
			</div>
			<DashboardNav />
			<Container className="page-form">
				<EditContactsForm />
			</Container>
		</div>
	);
};

export default EditContacts;
