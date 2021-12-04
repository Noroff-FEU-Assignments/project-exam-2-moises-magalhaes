import Heading from "../../components/elements/Heading";
import Services from "../../components/elements/Services";
import Products from "../../components/elements/Products";

import { Container } from "react-bootstrap";

const ServicesAndProducts = () => {
	return (
		<Container>
			<Heading title="Services & Products page" />
			<Services />
			<Products />
		</Container>
	);
};

export default ServicesAndProducts;
