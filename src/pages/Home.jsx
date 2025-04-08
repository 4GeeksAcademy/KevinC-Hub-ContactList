import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {
	const [contacts, setContacts] = useState([]);
	const { store, dispatch, fetchAgenda } = useGlobalReducer()

	useEffect(() => {
		fetchAgenda()
	}, [])

	useEffect(() => {
		setContacts(store.contacts)
	}, [store.contacts])
	console.log(contacts)
	return (
		<div className="text-center mt-5">
			{contacts?.length > 0 ? contacts.map((contact)=>(<ContactCard key={contact.id} contact={contact} />)):<h1>Create some Contacts</h1>}
			
			
			<Link className="btn btn-primary" to={"/create"}>Create</Link>
		</div>
	);
}; 