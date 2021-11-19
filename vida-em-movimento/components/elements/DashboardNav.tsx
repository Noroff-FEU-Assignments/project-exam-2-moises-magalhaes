import Link from "next/link";

const DashboardNav = () => {
	return (
		<div>
			<div className="d-flex" id="wrapper">
				<div className="border-end bg-white" id="sidebar-wrapper">
					<div className="sidebar-heading border-bottom bg-light">
						My admin page Dashboard
					</div>
					<div className="list-group list-group-flush">
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
		</div>
	);
};

export default DashboardNav;
