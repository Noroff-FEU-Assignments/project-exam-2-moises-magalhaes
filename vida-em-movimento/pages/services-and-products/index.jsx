import Heading from "../../components/elements/Heading";
import SubHeading from "../../components/elements/SubHeading";
import FetchServices from "../../components/hooks/fetchServices";
import FetchProducts from "../../components/hooks/fetchProducts";

const ServicesAndProducts = () => {
	return (
		<div>
			<Heading title="Services & Products page" />
			<SubHeading title="Services" />
			<FetchServices />
			<SubHeading title="Products" />
			<FetchProducts />
		</div>
	);
};

export default ServicesAndProducts;
