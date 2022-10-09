import React from "react";

export default function CloseButton({ handleClick }) {
	return (
		<div className=" flex items-center justify-end">
			<button onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10 text-gray-200"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	);
}
