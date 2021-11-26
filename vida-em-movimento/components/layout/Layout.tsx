import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { NavigationMenu } from "./NavigationMenu";

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<main>
				<NavigationMenu />
				<>{children}</>
				<Footer />
			</main>
		</>
	);
};

export default Layout;
