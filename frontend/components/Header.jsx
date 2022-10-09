import Link from "next/link";
import React from "react";
import MaxWidth from "./MaxWidth";

export default function Header() {
	return (
		<nav className="bg-teal-700 p-4">
			<MaxWidth>
				<div className="  text-white flex justify-between items-center">
					<Link href={"/"}>
						<h1 className=" cursor-pointer text-2xl font-bold">Cliento</h1>
					</Link>

					<Link href={"/dashboard"}>
						<span className=" cursor-pointer px-4 py-3 bg-white font-semibold text-gray-600 inline-block rounded-md">
							Dashboard
						</span>
					</Link>
				</div>
			</MaxWidth>
		</nav>
	);
}
