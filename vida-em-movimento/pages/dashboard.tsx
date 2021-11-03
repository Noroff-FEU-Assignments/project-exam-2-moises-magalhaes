import React from "react";

const dashboard = (props: any) => {
	const handleLogout = () => {
		props.history.push("/Login");
	};
	return <div>Welcome to dashboard</div>;
};

export default dashboard;
