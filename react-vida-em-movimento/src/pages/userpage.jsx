// import axios from "axios";
// import { useState } from "react";

const UserPage = (props) => {
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
