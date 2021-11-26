import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";
import Link from "next/link";

const FetchProducts = (props) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios
			.get(baseUrl + "my-products/")
			.then((res) => {
				// console.log(res);
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//add to cart
	const [cart, setCart] = useState([]);

	const submitForm = (product) => {
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

		console.log({ ...cart, ...product.qty });
	};

	return (
		<>
			<div className="products cards">
				{product.map((object) => (
					<Card key={object.id}>
						<Card.Body>
							<h3>{object.title}</h3>
							<p>{object.description}</p>
							<p>R$ {object.price},00</p>

							<Link
								href={"/services-and-products/products/" + object.id}
								passHref
							>
								<Button>Find more about</Button>
							</Link>
							{/* <Link href="cart/" passHref> */}
							<Button
								onClick={() => submitForm(object)}
								className="btn-secondary"
							>
								Add to cart
							</Button>
							{/* </Link> */}
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchProducts;
