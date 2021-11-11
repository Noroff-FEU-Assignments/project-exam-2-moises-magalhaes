import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<>
			<footer>
				<Container>
					<div className="footer-left col-md-4 col-sm-6">
						<p className="menu">
							<a href="#"> Home</a> <a href="#"> About</a>
							<a href="#"> Services and Products</a> <a href="#"> Portfolio</a>{" "}
							<a href="#"> Events</a> <a href="#">Contacts</a>
							<a href="#">Cart</a>
						</p>

						<div className="icons">
							<a href="#">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="#">
								<i className="fa fa-twitter"></i>
							</a>
							<a href="#">
								<i className="fa fa-linkedin"></i>
							</a>
							<a href="#">
								<i className="fa fa-google-plus"></i>
							</a>
							<a href="#">
								<i className="fa fa-instagram"></i>
							</a>
						</div>
					</div>
					<div className="footer-center col-md-4 col-sm-6">
						<div>
							<i className="fa fa-map-marker"></i>
							<p>
								<span> Rua Professora Eva mota, 15, Cohab São Francisco</span>
								Petrolina, PE - Brasil
							</p>
						</div>
						<div>
							<i className="fa fa-phone"></i>
							<p> (+55) 87 9 0000 0000</p>
						</div>
						<div>
							<i className="fa fa-envelope"></i>
							<p>
								<a href="#"> office@company.com</a>
							</p>
						</div>
					</div>
					<div className="footer-right col-md-4 col-sm-6">
						<h2>
							<span> Vida em Movimento</span>
						</h2>
						<p className="name">
							All Rights reserved by &copy; MoisesMdesign 2021
						</p>
					</div>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
