import { useRouter } from "next/router";
import Router from "next/router"
import axios from "axios";
import nookies from "nookies";
import { useEffect, useState } from "react";
import Logout from "../../components/elements/AdminLogout";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import { AppProps } from "next/dist/shared/lib/router/router";
import EditHome from "./edit-home";

// const Dashboard = ({ Component, DashboardProps }: AppProps) => {
const Dashboard = () => {
	const router = useRouter();
	

	const UseLocalStorage = (adminValue) => {
		const [value, setValue] = useState("");


		useEffect(() => {
			setValue(localStorage.getItem(adminValue));
		

		}, []);


		return value;
	};

	const fetchAdmin = UseLocalStorage("admin");
	console.log(fetchAdmin);

		if(fetchAdmin === null || undefined){
				router.push("/admin")
			}


	return (
		<div>
				<DashboardNav />
					<Container>
						<EditHome />
						<Logout />
					</Container>
			
		</div>
	);
};
export default Dashboard;
