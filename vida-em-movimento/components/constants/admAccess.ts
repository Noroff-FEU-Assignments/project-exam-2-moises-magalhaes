export const getUser = () => {
	const UserStorage = localStorage.getItem("user");
	if (UserStorage) return JSON.parse(UserStorage);
	else return null;
};
export const getToken = () => {
	// const getData = JSON.parse(fetchAdmin);

	// console.log(getData.token);
	return localStorage.getItem("token") || null;
};

export const setUserSession = (token: string, user: string) => {
	localStorage.setItem("token", token);
	localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserSession = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
};
