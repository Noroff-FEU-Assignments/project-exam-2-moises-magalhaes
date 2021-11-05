import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Logout from "../../components/elements/AdminLogout";
import EditProductsForm from "../../components/elements/EditProductsForm";

const EditServices = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<EditProductsForm />
				<Logout />
			</Container>
		</div>
	);
};

export default EditServices;
