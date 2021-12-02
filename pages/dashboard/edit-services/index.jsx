import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditServicesForm from "../../../components/elements/EditServicesForm";
import Heading from "../../../components/elements/Heading";

const EditServices = () => {
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
				<EditServicesForm />
			</Container>
		</div>
	);
};

export default EditServices;
