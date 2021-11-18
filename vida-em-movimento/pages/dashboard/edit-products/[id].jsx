import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";

const EditIdPage = () => {
	const [data, setData] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		axios
			.get(baseUrl + "products/" + id)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<>
			<div className="products">
				<h2>{id}</h2>
				<p>{data.title}</p>
				<p>{data.description}</p>
				{/* <Image src={data.image.url} alt="training" /> */}
			</div>
			<Accordion.Body className="edit-products">
				<Form>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Edit image</Form.Label>
						<Form.Control type="file" placeholder={data.image} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Edit Title</Form.Label>

						<Form.Control type="text" placeholder={data.title} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Edit text</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder={data.description}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Update
					</Button>
				</Form>
			</Accordion.Body>
		</>
	);
};

export default EditIdPage;
