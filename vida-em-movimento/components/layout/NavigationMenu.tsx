import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export const NavigationMenu = () => {
	return (
		<>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand href="/">Vida em Movimento</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link href="/" passHref>
								<Nav.Link>Home</Nav.Link>
							</Link>
							<Link href="/about" passHref>
								<Nav.Link>About</Nav.Link>
							</Link>

							<Link href="/services-and-products" passHref>
								<Nav.Link>Services And Products</Nav.Link>
							</Link>

							<Link href="/events" passHref>
								<Nav.Link>Events</Nav.Link>
							</Link>

							<Link href="/contacts" passHref>
								<Nav.Link>Contacts</Nav.Link>
							</Link>
							<Link href="/cart" passHref>
								<Nav.Link>Cart</Nav.Link>
							</Link>
							<Link href="/login" passHref>
								<Nav.Link>Login</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
