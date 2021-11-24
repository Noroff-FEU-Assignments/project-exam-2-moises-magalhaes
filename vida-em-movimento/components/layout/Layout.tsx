import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { NavigationMenu } from "./NavigationMenu";
import style from "../../styles/partials/nav.module.scss";

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<main>
				<NavigationMenu />
				<div>{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default Layout;
