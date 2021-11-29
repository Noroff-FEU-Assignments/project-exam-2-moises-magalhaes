import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditTestimoniesForm from "../../../components/elements/EditTestimoniesForm";
import Heading from "../../../components/elements/Heading";

const EditTestimonies = () => {
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
				<EditTestimoniesForm />
			</Container>
		</div>
	);
};

export default EditTestimonies;
