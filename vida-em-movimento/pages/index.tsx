import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NavigationMenu } from "../components/layout/NavigationMenu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div>
			<NavigationMenu />
		</div>
	);
};

export default Home;
