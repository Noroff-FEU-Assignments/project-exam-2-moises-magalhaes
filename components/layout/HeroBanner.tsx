import Heading from "../elements/Heading";
import FetchHome from "../hooks/fetchHome";

const HeroBanner = () => {
	return (
		<>
			<div className="home bg-light p-5 rounded-lg m-3">
				<FetchHome />
			</div>
		</>
	);
};

export default HeroBanner;
