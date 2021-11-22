import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Products from "../elements/Products";

const FetchCart = () => {
	const [cart, setCart] = useState([]);

	const initialState = {
		cart: [],
		totalPrice: 0,
	};

	useEffect(() => {
		const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
		setCart(cartLocalStorage);
		console.log(cartLocalStorage);
	}, []);

	//taking away duplicated items
	const uniqueItems = cart.reduce((singleItem, item) => {
		const existingItem = singleItem.find(({ id }) => id === item.id);
		if (existingItem) {
			existingItem.id + item.id;
		} else {
			singleItem.push(item);
		}
		return singleItem;
	}, []);

	//adding item
	const onAdd = (product) => {
		//have to find out if Products with "P" and ending in plural is right
		const exist = cart.find((x) => x.id === Products.id);
		if (exist) {
			setCart.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
			);
		} else {
			setCart([...cart, { ...product, qty: 1 }]);
		}
	};
	//removing item
	const onRemove = (product) => {
		const exist = cart.find((x) => x.id === products.id);
		if (exist.qty === 1) {
			setCart(cart.filter((x) => x.id !== Products.id));
		} else {
			setCart.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
			);
		}
	};

	//total price
	const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = itemsPrice > 200 ? 0 : 25;
	const totalPrice = itemsPrice + shippingPrice;

	return (
		<>
			<div>{cart.length === 0 && <h1>The cart is empty</h1>}</div>

			<div className="cart">
				{uniqueItems.map((object) => (
					<Card key={object.id}>
						<div>
							<h3>{object.title}</h3>
							<p>{object.description}</p>
							{/* <p>R$ {object.price},00</p> */}
						</div>
						<div>
							<Button onClick={() => onAdd(object)} className="add">
								+
							</Button>

							<Button onClick={() => onRemove(object)} className="remove">
								-
							</Button>
							<MdDelete />
						</div>
						<div>
							{object.qty} x R$ {object.price.toFixed(2)}
						</div>

						{/* <Button
							//  onClick={() => submitForm(object)}
							>
								go to payment
							</Button>
							</Link> */}
					</Card>
				))}{" "}
				{cart.length !== 0 && (
					<>
						<hr></hr>
						<div className="items-price">
							<div>Items price</div>
							<div>R$ {itemsPrice.toFixed(2)}</div>
						</div>
						<div className="shipping-price">
							<div>Shipping price</div>
							<div>R$ {shippingPrice.toFixed(2)}</div>
						</div>
						<div className="total-price">
							<div>Total price</div>
							<div>R$ {totalPrice.toFixed(2)}</div>
						</div>
					</>
				)}
				<Card>
					<Button>Go to payment</Button>
				</Card>
			</div>
		</>
	);
};

export default FetchCart;
