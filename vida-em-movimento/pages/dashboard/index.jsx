import { useRouter } from "next/router";
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

	const fecthAdmin = UseLocalStorage("admin");
	console.log(fecthAdmin);
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
			{/* <p value={fecthAdmin}></p> */}
			<Container>
				<EditHome />
				<Logout />
			</Container>
		</div>
	);
};
export default Dashboard;
