import Link from "next/link";
import { Container } from "react-bootstrap";
import { BiGridAlt } from "react-icons/bi";
import Heading from "../elements/Heading";
import SubHeading from "../elements/SubHeading";
import Logout from "../../components/elements/AdminLogout";

const desktopDashboard = () => {
	return (
		<>
			<div className="list-group list-group-flush desktop">
				<Link href="/dashboard/edit-home" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Home
					</li>
				</Link>
				<Link href="/dashboard/edit-testimonies" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Testimonies
					</li>
				</Link>
				<Link href="/dashboard/edit-about" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit About
					</li>
				</Link>
				<Link href="/dashboard/edit-services" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Services
					</li>
				</Link>
				<Link href="/dashboard/edit-products" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Products
					</li>
				</Link>

				<Link href="/dashboard/edit-contacts" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Contacts
					</li>
				</Link>
				<Link href="/dashboard/edit-events" passHref>
					<li className="list-group-item list-group-item-action list-group-item-light p-3">
						Edit Events
					</li>
				</Link>
			</div>
		</>
	);
};

export default desktopDashboard;
