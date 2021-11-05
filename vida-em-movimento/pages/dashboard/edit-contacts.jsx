import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";

const EditContacts = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<div>Edit Home here</div>
				<Logout />
			</Container>
		</div>
	);
};

export default EditContacts;
