import FetchFeaturedProducts from "../hooks/fetchFeaturedProducts";
import SubHeading from "./SubHeading";

const FeaturedProducts = () => {
	return (
		<>
			<SubHeading title="Products" />
			<FetchFeaturedProducts />
		</>
	);
};

export default FeaturedProducts;
