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
import styles from "../styles/Home.module.css";
import Products from "../components/elements/Products";

const Home: NextPage = () => {
	return (
		<>
			<HeroBanner />
			{/* <Products /> */}
		</>
	);
};

export default Home;
