import Link from "next/link";
import { BiGridAlt } from "react-icons/bi";
import AccordionDashboard from "../hooks/AccordionDashboard";

import SubHeading from "./SubHeading";
const DashboardNav = () => {
	return (
		<>
			<div className="d-flex admin-dashboard" id="wrapper">
				<div className="border-end" id="sidebar-wrapper">
					<div className="sidebar-heading container">
						<span className="icon">
							<BiGridAlt />
						</span>

						<SubHeading title="Dashboard" />
					</div>
					{/*mobile dashboard */}
					<AccordionDashboard />
					{/* desktop dashboard */}
					<div className="list-group list-group-flush desktop">
						<Link href="/dashboard" passHref>
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
				</div>
			</div>
		</>
	);
};

export default DashboardNav;
