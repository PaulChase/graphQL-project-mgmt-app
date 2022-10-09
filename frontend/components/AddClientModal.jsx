import React, { useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import CloseButton from "./CloseButton";
import InputAndLabel from "./InputAndLabel";
import SubmitButton from "./SubmitButton";

const ADD_CLIENT = gql`
	mutation createClient($name: String!, $email: String!, $phone: String, $about: String) {
		createClient(name: $name, email: $email, phone: $phone, about: $about) {
			id
			name
			email
		}
	}
`;

export default function AddClientModal({ closeModal, addNewClient }) {
	const [addClient, { data, loading, error }] = useMutation(ADD_CLIENT);
	const [client, SetClient] = useState({
		name: "",
		email: "",
		phone: "",
		about: "",
	});

	const handleInputChange = (name, value) => {
		SetClient({
			...client,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		addClient({ variables: client });
	};

	useEffect(() => {
		if (data) {
			addNewClient(data.createClient);
		}
	}, [data]);

	return (
		<div className=" fixed top-0 left-0 bg-black/80 w-full h-full flex justify-center items-center">
			<div className=" bg-gray-800 w-2/5 mx-auto rounded-md shadow-md p-6 text-gray-50">
				<CloseButton handleClick={closeModal} />
				{error && (
					<ul>
						{Object.keys(error.graphQLErrors[0].extensions.validation).map((name, index) => (
							<li key={index} className=" text-red-500  font-medium">
								{error.graphQLErrors[0].extensions.validation[name]}
							</li>
						))}
					</ul>
				)}
				<form action="" className=" space-y-4" onSubmit={handleSubmit}>
					<InputAndLabel label={"Name"} handleChange={handleInputChange} value={client.name} name={"name"} />

					<InputAndLabel
						label={"Email"}
						type="email"
						value={client.email}
						name="email"
						handleChange={handleInputChange}
					/>
					<InputAndLabel label={"Phone"} value={client.phone} name="phone" handleChange={handleInputChange} />

					<InputAndLabel
						element="textarea"
						label={"About"}
						value={client.about}
						name="about"
						handleChange={handleInputChange}
					/>

					<SubmitButton text={loading ? "submitting" : "Add Client"} />
				</form>
			</div>
		</div>
	);
}
