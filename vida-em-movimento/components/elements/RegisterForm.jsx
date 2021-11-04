import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const RegisterForm = () => {
	const router = useRouter();
	const [userData, seUserData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/register", userData);
			router.replace("/dashboard");
		} catch (err) {
			console.log(err.response.data);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	return (
		<>
			<form>
				<label>
					Username:
					<input
						type="text"
						name="username"
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Email:
					<input type="text" name="email" onChange={(e) => handleChange(e)} />
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<button>Register</button>
			</form>
		</>
	);
};

export default RegisterForm;
