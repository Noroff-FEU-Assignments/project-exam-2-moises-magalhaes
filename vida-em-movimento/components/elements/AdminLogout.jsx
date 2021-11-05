import React from "react";

const AdminLogout = () => {
	const logout = () => {
		try {
			localStorage.removeItem("admin");
		} catch (e) {
			console.log(e);
		}
	};
	return <button onClick={logout}>Logout</button>;
};

export default AdminLogout;
