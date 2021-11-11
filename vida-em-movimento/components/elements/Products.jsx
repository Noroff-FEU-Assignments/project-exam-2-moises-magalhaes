import FetchProducts from "../hooks/fetchProducts";
import SubHeading from "./SubHeading";

function Products() {
	return (
		<>
			<SubHeading title="Products" />
			<FetchProducts />
		</>
	);
}

export default Products;
