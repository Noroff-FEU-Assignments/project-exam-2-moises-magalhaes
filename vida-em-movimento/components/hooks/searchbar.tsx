import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
	const { search } = window.location;
	const query = new URLSearchParams(search).get("search");

	const filterData = (datas: any, query: any) => {
		if (!query) {
			return datas;
		}
		return datas.filter((data: any) => {
			const dataTitle = data.title.toLowerCase();
			return dataTitle.includes(query);
		});
	};

	return (
		<Form action="/" method="get">
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
