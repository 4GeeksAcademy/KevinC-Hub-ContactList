import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

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
        <div className="text-center mt-5">
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
                />
            </div>
            <button className="btn btn-primary" onClick={()=> handlecreateContact()}>Submit</button>
        </div>
    );
};