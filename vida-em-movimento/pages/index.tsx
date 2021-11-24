import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import HeroBanner from "../components/layout/HeroBanner";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import Products from "../components/elements/Products";
import Services from "../components/elements/Services";
import Events from "../components/elements/Events";
import Testimonies from "../components/elements/Testimonies";

const Home: NextPage = () => {
	return (
		<>
			<HeroBanner />
			<Services />
			<Products />
			<Testimonies />
			<Events />
		</>
	);
};

export default Home;
