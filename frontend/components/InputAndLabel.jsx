import React from "react";

export default function InputAndLabel({ handleChange, label, type = "text", element = "input", value, name }) {
	if (element === "textarea") {
		return (
			<div>
				<label className=" text-lg font-semibold" htmlFor={label}>
					{label}:
				</label>{" "}
				<br />
				<textarea
					type={type}
					id={label}
					name={name}
					value={value}
					onChange={(event) => handleChange(event.target.name, event.target.value)}
					rows={4}
					className=" w-full px-3 py-2 bg-gray-600 rounded text-gray-50 mt-3 outline-none focus:outline-none text-lg"
				></textarea>
			</div>
		);
	}
	return (
		<div>
			<label className=" text-lg font-semibold" htmlFor={label}>
				{label}:
			</label>{" "}
			<br />
			<input
				type={type}
				name={name}
				id={label}
				value={value}
				onChange={(event) => handleChange(event.target.name, event.target.value)}
				className=" w-full px-3 py-2 bg-gray-600 rounded text-gray-50 mt-3 outline-none focus:outline-none text-lg"
			/>
		</div>
	);
}
