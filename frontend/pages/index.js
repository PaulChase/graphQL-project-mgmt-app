import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className=" bg-lime-500 text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur nulla tempora expedita numquam
					explicabo possimus voluptatem corporis nostrum dolores velit dignissimos inventore, nemo animi autem
					blanditiis non tempore nesciunt?
				</div>
			</main>
		</div>
	);
}
