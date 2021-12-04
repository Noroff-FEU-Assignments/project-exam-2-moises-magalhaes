import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { NavigationMenu } from "./NavigationMenu";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
};

const stripePromise = loadStripe("process.env.PUBLISHABLE_KEY");

const Layout = ({ children }: Props) => {
	return (
		<>
			<main>
				<NavigationMenu />
				<Elements stripe={stripePromise}>{children} </Elements>

				<Footer />
			</main>
		</>
	);
};

export default Layout;
