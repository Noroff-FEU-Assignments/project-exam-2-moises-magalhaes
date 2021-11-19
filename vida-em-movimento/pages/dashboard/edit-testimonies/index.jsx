import React from "react";
import { Container } from "react-bootstrap";
import DashboardNav from "../../../components/elements/DashboardNav";
import Logout from "../../../components/elements/AdminLogout";
import EditTestimoniesForm from "../../../components/elements/EditTestimoniesForm";

const EditTestimonies = () => {
	return (
		<div>
			<DashboardNav />
			<Container>
				<EditTestimoniesForm />
				<Logout />
			</Container>
		</div>
	);
};

export default EditTestimonies;
