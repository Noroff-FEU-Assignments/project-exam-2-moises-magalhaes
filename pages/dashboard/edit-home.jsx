import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";
import EditHomeForm from "../../components/elements/EditHomeForm";
import Heading from "../../components/elements/Heading";

const EditHome = () => {
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
				<EditHomeForm />
			</Container>
		</div>
	);
};

export default EditHome;
