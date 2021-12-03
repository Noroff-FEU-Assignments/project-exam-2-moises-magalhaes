import React from "react";
import Heading from "../components/elements/Heading";
import FetchCart from "../components/hooks/fetchCart";

const cart = () => {
	return (
		<div className="cart">
			<Heading title="Cart" />
			<FetchCart />
		</div>
	);
};

export default cart;
