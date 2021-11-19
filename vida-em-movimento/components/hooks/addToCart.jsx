import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const AddToCart = (props) => {
	const [cart, setCart] = useState([]);
	const submitForm = (product) => {
		setCart([...cart, product]);
		// localStorage.setItem("cart", "products");
		localStorage.setItem("cart", JSON.stringify(product));
		const result = localStorage.getItem("cart");
		console.log(result);
	};

	return <Button onClick={() => submitForm(product)}>Add to cart</Button>;
};

export default AddToCart;
