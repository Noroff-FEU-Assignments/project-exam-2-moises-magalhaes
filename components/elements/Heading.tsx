type Props = {
	title: string;
};

function Heading({ title }: Props) {
	return <h1>{title}</h1>;
}

export default Heading;
