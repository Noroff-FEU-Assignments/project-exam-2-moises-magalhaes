import React from "react";
import { Button } from "react-bootstrap"

const AdminLogout = () => {
	const logout = () => {
		try {
			localStorage.removeItem("admin");
		} catch (e) {
			console.log(e);
		}
	};
	return <Button onClick={logout}>Logout</Button>;
};

export default AdminLogout;
