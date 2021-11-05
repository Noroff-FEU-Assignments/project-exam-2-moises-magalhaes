import React from "react";
import { Container } from "react-bootstrap";
import AdminLogout from "../../components/elements/AdminLogout";
import DashboardNav from "../../components/elements/DashboardNav";

const EditAbout = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<div>Edit Home here</div>
				<AdminLogout />
			</Container>
		</div>
	);
};

export default EditAbout;
