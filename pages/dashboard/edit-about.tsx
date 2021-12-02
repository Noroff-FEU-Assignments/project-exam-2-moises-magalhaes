import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import EditAboutForm from "../../components/elements/EditAboutForm";
import Heading from "../../components/elements/Heading";
import Logout from "../../components/elements/AdminLogout";

const EditAbout = () => {
	return (
		<>
			<div className="dash-page">
				<div className="welcome-dashboard">
					<Container className="welcome">
						<Heading title="Welcome Admin" />
						<Logout />
					</Container>
				</div>
				<DashboardNav />
				<Container className="page-form">
					<EditAboutForm />
				</Container>
			</div>
		</>
	);
};

export default EditAbout;
