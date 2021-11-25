import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import {
	FaMapMarkerAlt,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
	return (
		<>
			<footer>
				<Container>
					<div className="footer-left col-md-4 col-sm-6">
						<div className="menu">
							<Link href="/"> Home</Link>
							<Link href="/about"> About</Link>
							<Link href="/services-and-products"> Services and Products</Link>
							<Link href="/events"> Events</Link>
							<Link href="/contacts">Contacts</Link>
							<Link href="/cart">Cart</Link>
						</div>
					</div>
					<div className="footer-center col-md-4 col-sm-6">
						<div className="address">
							<span>
								<FaMapMarkerAlt />
								<h2>Address</h2>
							</span>

							<p>
								Rua Professora Eva mota, 15, Cohab São Francisco Petrolina, PE -
								Brasil
							</p>
						</div>

						<div className="icons">
							<a href="#">
								<FaFacebookF />
							</a>
							<a href="#">
								<FaInstagram />
							</a>
							<a href="#">
								<FaWhatsapp />
							</a>
						</div>
						<div className="email">
							<HiOutlineMail />
							<a href="#"> info@vidaemmovimentopnz.com.br</a>
						</div>
					</div>
					<div className="footer-right col-md-4 col-sm-6">
						<h2>
							<span> Vida em Movimento</span>
						</h2>
						<p className="name">
							All Rights reserved by &copy; Moises Magalhaes design 2021
						</p>
					</div>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
