import React from "react";
import Heading from "../elements/Heading";

const HeroBanner = () => {
	return (
		<>
			<div className="bg-light p-5 rounded-lg m-3">
				<Heading title="Welcome to our website" />
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content
					out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</>
	);
};

export default HeroBanner;
