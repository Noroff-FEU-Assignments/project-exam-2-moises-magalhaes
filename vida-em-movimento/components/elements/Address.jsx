import { Container } from "react-bootstrap";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const Address = () => {
	return (
		<>
			<div className="address-info">
				<Container>
					<FaMapMarkerAlt />
					<p>
						Rua Professora Eva Mota, Cohab São Francisco, 15. Petrolina-PE
						<br />
						Brasil
					</p>
				</Container>
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2433833276996!2d-40.548281200000005!3d-9.400026500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77370d18a03301d%3A0x9b8b89d1ab62679e!2sR.%20Profa.%20Eva%20Mota%2C%2015%20-%20COHAB%20S%C3%A3o%20Francisco%2C%20Petrolina%20-%20PE%2C%2056309-240%2C%20Brazil!5e0!3m2!1sen!2sno!4v1636727831619!5m2!1sen!2sno"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
			></iframe>
			<div>
				<FaRegClock />
			</div>
		</>
	);
};

export default Address;
