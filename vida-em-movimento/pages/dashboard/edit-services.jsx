import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";
import EditServicesForm from "../../components/elements/EditServicesForm";

const EditServices = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<EditServicesForm />
				<Logout />
			</Container>
		</div>
	);
};

export default EditServices;
