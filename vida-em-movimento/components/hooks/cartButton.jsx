import Link from "next/link";
import { Button } from "react-bootstrap";
import { GrCart } from "react-icons/gr";

const CartButton = () => {
	return (
		<>
			<Link href="/cart" passHref>
				<Button>
					<GrCart />
				</Button>
			</Link>
		</>
	);
};

export default CartButton;
