import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const FetchCart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
		setCart(cartLocalStorage);
		console.log(cartLocalStorage);
	}, []);

	// setCart([cartLocalStorage]);

	return (
		<>
			<div className="cart">
				{cart.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<p>{object.description}</p>

						<Button onClick={() => submitForm(object)}>Add to cart</Button>
						{/* </Link> */}
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchCart;
