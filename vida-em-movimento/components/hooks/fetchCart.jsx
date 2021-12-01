import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import watch from "../images/david-svihovec-gtQddXwuS18-unsplash.jpg";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";

const FetchCart = ({ props }) => {
	const [cart, setCart] = useState([]);

	const initialState = {
		cart: [],
		totalPrice: 0,
	};

	useEffect(() => {
		const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
		setCart(cartLocalStorage);
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

	//subtracting item
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

	//remove item
	const onRemove = (product) => {
		const exist = cart.find((x) => x.id === product.id);
		if (exist.qty) {
			setCart(cart.filter((x) => x.id !== product.id));
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	};

	//total price
	const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = itemsPrice > 200 ? 0 : 25;
	const totalPrice = itemsPrice + shippingPrice;

	// console.log(totalPrice);
	//add price to localStorage
	const [finalPrice, setFinalPrice] = useState(totalPrice);

	const submitPrice = (e) => {
		e.preventDefault();
		localStorage.setItem("finalPrice", finalPrice);
	};

	return (
		<>
			{/* <Elements stripe={stripePromise}> */}
			<Container>
				<div>{cart.length === 0 && <h1>The cart is empty</h1>}</div>

				<div className="cart cards">
					{uniqueItems.map((object) => (
						<Card key={object.id} className="product">
							<Card.Body>
								<div className="box">
									<Image src={watch} alt="watch" layout="responsive" />
								</div>
								<div className="info">
									<div className="title">
										<h4>{object.title}</h4>
									</div>
									<div className="line-2 price">
										<p>R$ {object.price.toFixed(2)}</p>
									</div>
									<div className="remove-btn">
										<CgTrashEmpty onClick={() => onRemove(object)} />
									</div>
									<div className="quantity">
										<p>Quantidade</p>
									</div>
									<div className="buttons">
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
								{/* <Link onSubmit={submitPrice} href={"/checkout"} passHref> */}
								<Button onSubmit={(e) => setFinalPrice(submitPrice)}>
									Go to payment
								</Button>
								{/* </Link> */}
							</Card>
						</>
					)}
				</div>
			</Container>
			{/* </Elements> */}
		</>
	);
};

export default FetchCart;
