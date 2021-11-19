import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../constants/api";
import AddToCart from "./addToCart";
import Link from "next/link";

const FetchProducts = (props) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios
			.get(baseUrl + "products/")
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
		setCart([...cart, product]);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<>
			<div className="products">
				{product.map((object) => (
					<Card key={object.id}>
						<h3>{object.title}</h3>
						<p>{object.description}</p>
						<Link
							href={"/services-and-products/products/" + object.id}
							passHref
						>
							<Button>Find more about</Button>
						</Link>
						{/* <Link href="cart/" passHref> */}
						<Button onClick={() => submitForm(object)}>Add to cart</Button>
						{/* </Link> */}
					</Card>
				))}
			</div>
		</>
	);
};

export default FetchProducts;

export const getStaticProps = async () => {};
