import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Image from "next/image";
import watch from "../images/david-svihovec-gtQddXwuS18-unsplash.jpg";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";

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
		const exist = cart.find((duplicated) => duplicated.id === product.id);
		if (exist) {
			setCart(
				cart.map((duplicated) =>
					duplicated.id === product.id
						? { ...exist, qty: exist.qty + 1 }
						: duplicated
				)
			);
		} else {
			setCart([...cart, { ...product, qty: 1 }]);
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	};
	//removing item
	const onSubtract = (product) => {
		const exist = cart.find((x) => x.id === product.id);

		if (exist.qty === 1) {
			setCart(cart.filter((x) => x.id !== product.id));
		} else {
			setCart(
				cart.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	//total price
	const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = itemsPrice > 200 ? 0 : 25;
	const totalPrice = itemsPrice + shippingPrice;

	return (
		<>
			<Container>
				<div>{cart.length === 0 && <h1>The cart is empty</h1>}</div>

				<div className="cart">
					{uniqueItems.map((object) => (
						<Card key={object.id} className="product">
							<Card.Body>
								<Image src={watch} alt="watch" />
								<div className="info">
									<div className="title">
										<h4>{object.title}</h4>
									</div>
									<div className="line-2">
										<p>R$ {object.price.toFixed(2)}</p>{" "}
										<CgTrashEmpty onClick={() => onRemove(object)} />
									</div>
									<div className="quantity">
										<p>Quantidade</p>
										<div className="buttons">
											{/* <BiPlusCircle></BiPlusCircle> */}

											<Button onClick={() => onAdd(object)} className="add">
												<BiPlusCircle />
											</Button>
											<p>{object.qty}</p>
											<Button
												onClick={() => onSubtract(object)}
												className="remove"
											>
												<BiMinusCircle />
											</Button>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					))}
					{cart.length !== 0 && (
						<>
							<hr></hr>
							<div className="items-price">
								<div>Items price</div>
								<p>R$ {itemsPrice.toFixed(2)}</p>
							</div>
							<div className="shipping-price">
								<div>Shipping price</div>
								<p>R$ {shippingPrice.toFixed(2)}</p>
							</div>
							<div className="total-price">
								<div>Total price</div>
								<p>R$ {totalPrice.toFixed(2)}</p>
							</div>
							<Card>
								<Button>Go to payment</Button>
							</Card>
						</>
					)}
				</div>
			</Container>
		</>
	);
};

export default FetchCart;
