import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

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
	const uniqueItems = cart.reduce((prev, item) => {
		const existingItem = prev.find(({ id }) => id === item.id);
		if (existingItem) {
			existingItem.id + item.id;
		} else {
			prev.push(item);
		}
		return prev;
	}, []);

	return (
		<>
			<div>{cart.length === 0 && <h1>The cart is empty</h1>}</div>

			<div className="cart">
				{uniqueItems.map((object) => (
					<Card key={object.id} className="row">
						<div className="col-2">
							<h3>{object.title}</h3>
							<p>{object.description}</p>
							<p>R$ {object.price},00</p>
						</div>
						<div className="col-2">
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
				))}
				<Card>
					<Button>Go to payment</Button>
				</Card>
			</div>
		</>
	);
};

export default FetchCart;
