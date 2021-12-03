import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditProductsForm from "../../../components/elements/EditProductsForm";
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
				<EditProductsForm />
			</Container>
		</div>
	);
};

export default EditServices;
