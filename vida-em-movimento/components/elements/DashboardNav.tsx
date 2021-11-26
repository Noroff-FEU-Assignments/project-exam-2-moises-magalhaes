import { BiGridAlt } from "react-icons/bi";
import AccordionDashboard from "../hooks/AccordionDashboard";
import DesktopDashboard from "../hooks/desktopDashboard";

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
					<DesktopDashboard />
				</div>
			</div>
		</>
	);
};

export default DashboardNav;
