import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const UpdateContact = () => {
    const [contact, setContacts] = useState({name:"", phone:"", email:"", address:""})
    const { store, dispatch, getContacts, updateContact } = useGlobalReducer()
    const navigate = useNavigate()
    const {id}= useParams()

    useEffect(()=> {
        getContacts()
    }, [])
    useEffect(()=> {
        
        let currentContact= store.contacts?.filter((contact)=>contact.id == id)
        if (currentContact?.length===1){
            setContacts(currentContact[0])
        }
        
    }, [store.contacts])

    const handlecreateContact = () => {
      updateContact(contact)
      navigate("/")
    }

    return (
        <div className="container">
            <div className="updatecard">
                <h1>Update Contact Info</h1>
                <div className="text-left mt-5">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=> setContacts({...contact,name:e.target.value})}
                            placeholder="Enter new Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                        </div>
                    <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=> setContacts({...contact,phone:e.target.value})}
                            placeholder="(XXX)-XXX-XXXX"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        </div>
                    <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=> setContacts({...contact,email:e.target.value})}
                            placeholder="Enter new email address"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                        </div>
                    <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=> setContacts({...contact,address:e.target.value})}
                            placeholder="Enter new Address"
                        />
                    </div>
                    <button className="btn btn-primary" onClick={()=> handlecreateContact()}>Update</button> <Link to="/">Or back Home</Link>
                </div>
            </div>
        </div>
    );
};