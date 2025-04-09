import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({contact}) => {
    
    const { store, dispatch, deleteContact } = useGlobalReducer()
    const handledelete = () => {
        deleteContact(contact.id)
        window.location.reload()
    };

    return (
        <div className="card" style={{"width": "18rem", margin:"10px"}}>
            <img className="card-img-top" src="https://i5.walmartimages.com/seo/Star-Wars-The-Vintage-Collection-Stormtrooper-Action-Figure-and-1-accessory_2c469195-c41a-480e-a6ba-0502de46aa03.e60dd047061efd24d0cd251a89cedc08.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
            <div className="card-title"><h5>{contact.name}</h5></div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i className="fa-solid fa-phone"></i> {contact.phone}</li>
                <li className="list-group-item"><i className="fa-solid fa-envelope"></i> {contact.email}</li>
                <li className="list-group-item"><i className="fa-solid fa-location-dot"></i> {contact.address}</li>
                <div className="card-body">
                    <Link className="btn btn-primary" to={"/update/"+contact.id}><i className="fa-solid fa-pencil"></i></Link>
                    <button className="btn btn-danger" onClick={()=>handledelete()}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </ul>
        </div>
    );
}; 

export const ContactList = ({ contacts }) => {
    return (
        <div className="contact-cards-container">
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};