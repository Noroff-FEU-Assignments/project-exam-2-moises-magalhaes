import React from "react";
import { Container } from "react-bootstrap";
import AdminLogout from "../../components/elements/AdminLogout";
import DashboardNav from "../../components/elements/DashboardNav";
import EditAboutForm from "../../components/elements/EditAboutForm";

const EditAbout = () => {
	return (
		<>
			<DashboardNav />
			<Container>
				<EditAboutForm />
				<AdminLogout />
			</Container>
		</>
	);
};

export default EditAbout;
