import { BiGridAlt } from "react-icons/bi";
import AccordionDashboard from "../hooks/AccordionDashboard";
import DesktopDashboard from "../hooks/desktopDashboard";
import Heading from "../elements/Heading";
import SubHeading from "../elements/SubHeading";
import Logout from "../../components/elements/AdminLogout";
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
