import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import { useEffect, useReducer, useState } from "react";
import Logout from "../../components/elements/AdminLogout";
import { Container } from "react-bootstrap";
import DashboardNav from "../../components/elements/DashboardNav";
import { AppProps } from "next/dist/shared/lib/router/router";
import EditHome from "./edit-home";

const Dashboard = ({ Component, DashboardProps }: AppProps) => {
	const router = useRouter();

	// const getStorageValue = useState(() => {
	// 	//getting stored value from localstorage
	// 	if (typeof window !== "undefined") {
	// 		return {
	// 			admin:
	// 				window.localStorage.getItem("admin") === null
	// 					? []
	// 					: window.localStorage.getItem("admin"),
	// 			// viwedItems: [],
	// 			// saved: [],
	// 		};
	// 	}
	// 	const retrieved: any = localStorage.getItem("admin");
	// 	const initialValue = JSON.parse(retrieved);

	// 	console.log(initialValue);

	// 	// return initialValue || "";
	// });

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
