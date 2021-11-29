import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditEventsForm from "../../../components/elements/EditEventsForm";
import Heading from "../../../components/elements/Heading";

const EditEvents = () => {
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
				<EditEventsForm />
			</Container>
		</div>
	);
};

export default EditEvents;
