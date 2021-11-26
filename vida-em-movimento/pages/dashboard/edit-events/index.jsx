import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditEventsForm from "../../../components/elements/EditEventsForm";

const EditEvents = () => {
	return (
		<>
			<DashboardNav />
			<Container>
				<EditEventsForm />
				<Logout />
			</Container>
		</>
	);
};

export default EditEvents;
