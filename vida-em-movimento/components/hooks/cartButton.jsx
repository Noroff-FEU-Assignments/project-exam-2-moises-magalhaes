import Link from "next/link";
import { Button } from "react-bootstrap";

const CartButton = () => {
	return (
		<>
			<Link href="/cart" passHref>
				<Button>Go to cart</Button>
			</Link>
		</>
	);
};

export default CartButton;
