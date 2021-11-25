import Heading from "../../components/elements/Heading";
import SubHeading from "../../components/elements/SubHeading";
import FetchServices from "../../components/hooks/fetchServices";
import FetchProducts from "../../components/hooks/fetchProducts";
import { Container } from "react-bootstrap";

const ServicesAndProducts = () => {
	return (
		<Container>
			<Heading title="Services & Products page" />
			<SubHeading title="Services" />
			<FetchServices />
			<SubHeading title="Products" />
			<FetchProducts />
		</Container>
	);
};

export default ServicesAndProducts;
