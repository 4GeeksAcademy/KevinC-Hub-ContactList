import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const CreateContact = () => {
    const [contact, setContacts] = useState({name:"", phone:"", email:"", address:""})
    const { store, dispatch, fetchAgenda, createContact } = useGlobalReducer()
    const navigate = useNavigate()


    useEffect(()=> {
        fetchAgenda()
    }, [])

    const handlecreateContact = () => {
      createContact(contact)
      navigate("/")
    }

    return ( 
        <div className="container">
            <div className="createcard">
                <h1>Fill Out Contact</h1>
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
                        placeholder="Enter Trooper name"
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
                        placeholder="trooper.00@example.com"
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
                    placeholder="Enter a current address"
                />
                </div>
                <button className="btn btn-primary" onClick={()=> handlecreateContact()}>Create Contact!</button>
            </div>
        </div>
    );
};
