import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "react-router-dom";

export const NavigationMenu = () => {
	return (
		<>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand to="/">Vida em Movimento</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link to="/">
								<Nav.Link>Home</Nav.Link>
							</Link>
							<Link to="/about">
								<Nav.Link>About</Nav.Link>
							</Link>

							<Link to="/services and products">
								<Nav.Link>Products and services</Nav.Link>
							</Link>

							<Link to="/events">
								<Nav.Link>Events</Nav.Link>
							</Link>

							<Link to="/contact">
								<Nav.Link>Contacts</Nav.Link>
							</Link>
							<Link to="/cart">
								<Nav.Link>Cart</Nav.Link>
							</Link>
							<Link to="/login">
								<Nav.Link>Login</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
