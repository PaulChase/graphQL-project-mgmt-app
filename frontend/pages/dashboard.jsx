import { gql } from "@apollo/client";
import Link from "next/link";
import React from "react";
import client from "../apollo-client";
import MaxWidth from "../components/MaxWidth";

const stats = [1, 2, 3];

export async function getServerSideProps() {
	const { data } = await client.query({
		query: gql`
			query {
				clients {
					id
					name
					email
				}
			}
		`,
	});

	return {
		props: {
			clients: data.clients,
		},
	};
}

export default function dashboard({ clients }) {
	return (
		<main className=" bg-slate-700 py-8 md:py-12">
			<section className=" px-4 ">
				<MaxWidth>
					<div className=" flex justify-between items-center text-white">
						<div className=" flex items-center space-x-4">
							<div className=" bg-teal-300 font-black text-5xl w-24 h-24 rounded-full flex justify-center items-center text-gray-700">
								A
							</div>
							<div className=" space-y-3">
								<h2 className=" text-2xl font-semibold">Paul Chase</h2>
								<p className=" font-medium">paulchase@gmail.com</p>
							</div>
						</div>

						<div className="self-stretch flex space-x-6">
							{stats.map((stats, index) => (
								<div key={index} className=" bg-gray-600 px-8 py-6 rounded-md shadow-md h-full space-y-3">
									<h4 className=" font-semibold text-center">Clients</h4>
									<h1 className=" font-black text-5xl text-teal-200 text-center">12</h1>
								</div>
							))}
						</div>
					</div>
				</MaxWidth>
			</section>

			<section className=" mt-12">
				<MaxWidth>
					<div className=" text-white">
						<h2 className=" text-3xl font-bold border-l-8  border-teal-200 pl-4 rounded">Clients</h2>

						<div className=" grid md:grid-cols-3 gap-10 mt-14">
							{clients.map((client) => (
								<Link key={client.id} href={`/client/${client.id}`}>
									<div className="  p-4 bg-gray-700 hover:bg-gray-600 shadow rounded-md cursor-pointer">
										<div className="flex items-start justify-between ">
											<div className=" flex items-start space-x-4">
												<div className=" bg-teal-300 font-black text-4xl w-16 h-16 rounded-md flex justify-center items-center text-gray-700">
													{client.name[0]}
												</div>
												<div className=" space-y-3">
													<h2 className=" text-2xl font-semibold">{client.name}</h2>
													<p className=" font-medium">{client.email}</p>
												</div>
											</div>
											<div className=" self-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="w-6 h-6"
												>
													<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
												</svg>
											</div>
										</div>

										<div className=" ml-20 mt-4 space-x-4">
											<span className=" font-semibold text-teal-300 text-sm">12 projects</span>
											<span className=" font-semibold text-teal-300 text-sm">23 tasks</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</MaxWidth>
			</section>
		</main>
	);
}
