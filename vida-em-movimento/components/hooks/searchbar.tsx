import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export interface searchbarProps {}

const Searchbar = () => {
	const [value, setValue] = useState("");

	const handleSearch = (e: any) => {
		e.preventDefault();
	};
	// const { search } = window.location;
	// const query = new URLSearchParams(search).get("search");

	// const filterData = (datas: any, query: any) => {
	// 	if (!query) {
	// 		return datas;
	// 	}
	// 	return datas.filter((data: any) => {
	// 		const dataTitle = data.title.toLowerCase();
	// 		return dataTitle.includes(query);
	// 	});
	// };

	return (
		<Form action="/" method="get" onSubmit={handleSearch}>
			<Form.Group className="mb-3" controlId="searchForm">
				<Form.Label>Search here</Form.Label>
				<Form.Control type="text" placeholder="Search here" name="search" />
				<Button type="submit">
					<FaSearch />
				</Button>
			</Form.Group>
		</Form>
	);
};

export default Searchbar;
