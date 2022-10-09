import React from "react";

export default function SubmitButton({ text }) {
	return (
		<button type="submit" className=" bg-teal-600 text-center font-semibold py-3 text-gray-200 rounded w-full">
			{text}
		</button>
	);
}
