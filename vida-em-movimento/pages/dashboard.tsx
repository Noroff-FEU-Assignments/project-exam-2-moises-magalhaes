import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import { useState } from "react";

const Dashboard = (props: any) => {
	const router = useRouter();

	// if	 (localStorage === undefined){
	// 	router.push("/admin");
	// 	 }

	// function getStorageValue(key: string, defaultValue: string) {
	// 	//getting value from localstorage

	// 	const saved = localStorage.getItem(key);
	// 	const initialValue = JSON.parse(saved);
	// 	return initialValue || defaultValue;
	// }
	// export const useLocalStorage = (key, defaultValue) => {
	// 	const [value, setValue] = useState(() => {
	// 		return getStorageValue(key, defaultValue);
	// 	});
	// };

	const getKey = useState(() => {
		//getting stored value from localstorage
		const retrieved: any = localStorage.getItem("admin");
		const initialValue = JSON.parse(retrieved);

		console.log(initialValue);
		// console.log(initialValue.defaultValue);

		return initialValue || "";
	});

	const Logout = () => {
		try {
			localStorage.removeItem("admin");
		} catch (e) {
			console.log(e);
		}
	};

	// const logout = async () => {
	// 	try {
	// 		await axios.get("/api/logout");
	// 		router.push("/admin");
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };
	// if (localStorage.getItem("admin") !== null) {
	return (
		<div>
			<div>Username</div>
			{/* <div>Email: {email}</div> */}
			<button onClick={Logout}>Logout</button>
		</div>
	);
	// } else {
	// 	return router.push("/admin");
	// }
};

export default Dashboard;
