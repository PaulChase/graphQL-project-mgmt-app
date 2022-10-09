import { gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import client from "../../apollo-client";
import MaxWidth from "../../components/MaxWidth";

const stats = [1, 2];

export async function getServerSideProps(context) {
	const { id } = context.query;

	const { data } = await client.query({
		query: gql`
			query {
				client(id: ${id}) {
					name
					email
					projects {
						id
						name
						desc
					}
				}
			}
		`,
	});

	return {
		props: {
			client: data.client,
		},
	};
}

export default function Client({ client }) {
	return (
		<main className=" bg-slate-700 py-8 md:py-12 min-h-screen">
			<section className=" px-4 ">
				<MaxWidth>
					<div className=" flex justify-between items-center text-white">
						<div className=" flex items-center space-x-4">
							<div className=" bg-teal-300 font-black text-5xl w-24 h-24 rounded-md flex justify-center items-center text-gray-700">
								A
							</div>
							<div className=" space-y-3">
								<h2 className=" text-2xl font-semibold">{client.name}</h2>
								<p className=" font-medium">{client.email}</p>
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
						<h2 className=" text-3xl font-bold border-l-8  border-teal-200 pl-4 rounded">Projects</h2>

						<div className=" grid md:grid-cols-3 gap-10 mt-14">
							{client.projects.map((project) => (
								<Link href={`/project/${project.id}`} key={project.id}>
									<div className="  p-4 bg-gray-700 hover:bg-gray-600 shadow rounded-md cursor-pointer">
										<div className="flex items-start justify-between ">
											<div className=" flex items-start space-x-4">
												<div className=" bg-teal-300 font-black text-4xl w-8 h-8 rounded-full px-2 flex justify-center items-center text-gray-700">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="w-10 h-10"
													>
														<path
															fillRule="evenodd"
															d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<div className=" space-y-3">
													<h2 className=" text-2xl font-semibold">{project.name}</h2>
													<p className=" font-medium">{project.desc}</p>
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

										<div className=" ml-10 mt-4 ">
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
