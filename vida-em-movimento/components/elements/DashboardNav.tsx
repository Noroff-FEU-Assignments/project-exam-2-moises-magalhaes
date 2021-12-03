import { BiGridAlt } from "react-icons/bi";
import AccordionDashboard from "../hooks/accordionDashboard";
import DesktopDashboard from "../hooks/desktopDashboard";
import SubHeading from "../elements/SubHeading";
import { Container } from "react-bootstrap";

const DashboardNav = () => {
	return (
		<>
			<Container className="dashMenu">
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
						<DesktopDashboard />
					</div>
				</div>
			</Container>
		</>
	);
};

export default DashboardNav;
