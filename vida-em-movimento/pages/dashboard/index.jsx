import { useRouter } from "next/router";
import Router from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Logout from "../../components/elements/AdminLogout";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import Heading from "../../components/elements/Heading";

// const Dashboard = ({ Component, DashboardProps }: AppProps) => {
const Dashboard = () => {
	const router = useRouter();

	const UseLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");

		useEffect(() => {
			setValue(localStorage.getItem(adminValue));
		}, [adminValue]);

		return value;
	};

	const fetchAdmin = UseLocalStorage("admin");
	// console.log(fetchAdmin);

	if (fetchAdmin === null || undefined) {
		router.push("/admin");
	}

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
			</div>
		</>
	);
};
export default Dashboard;
