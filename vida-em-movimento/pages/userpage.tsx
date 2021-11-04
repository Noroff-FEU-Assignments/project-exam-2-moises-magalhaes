import { useRouter } from "next/router";
// import axios from "axios";
import Router from "next/router";
import { useState } from "react";

const UserPage = (props: any) => {
	const router = useRouter();

	// const [details, setDetails] = useState({
	// 	identifier: "",
	// 	password: "",
	// 	login: false,
	// 	token: "",
	// });

	const Logout = () => {
		try {
			localStorage.removeItem("login");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<div>Username</div>
			<button onClick={Logout}>Logout</button>
		</div>
	);
};

export default UserPage;
