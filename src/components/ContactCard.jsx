import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({contact}) => {
    
    const { store, dispatch, deleteContact } = useGlobalReducer()
    const handledelete = () => {
        deleteContact(contact.id)
        window.location.reload()
    }

    return (
        <div className="card" style={{"width": "18rem"}}>
            <img className="card-img-top" src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">{contact.phone}</p>
                    <p className="card-text">{contact.email}</p>
                    <p className="card-text">{contact.address}</p>
                    <Link className="btn btn-primary" to={"/update/"+contact.id}>Update</Link>
                    <button className="btn btn-danger" onClick={()=>handledelete()}>Delete</button>
                </div>
        </div>
    );
}; 