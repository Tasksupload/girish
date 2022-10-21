import React, { useState, useEffect } from "react";

import axios from 'axios';
import { useHistory } from "react-router-dom";
const url=`http://localhost:3002/users`

export default (props) => 
{

    var [userData, setStateUserData]=useState({
            name:'',
            email:'',
            phone:'',
            txtConformation:''

        })

        var {name,email,phone,txtConformation }=userData
/*
    unameHandling = (e) =>
    {
        this.setState({uname:e.target.value })
    }

    emailHandling = (e) =>
    {
        this.setState({email:e.target.value })
    }
    phoneHandling = (e) =>
    {
        this.setState({phone:e.target.value })
    }
*/
    let formDatahandling=(e)=>
    {
        setStateUserData({...userData,[e.target.name]:e.target.value});
    }

    let submitHandler = (e) =>
    {
        e.preventDefault();
        var FormData=
        {
            name: `${userData.name}`,
            email:`${userData.email}`,
            phone:`${userData.phone}`
        }
        
        axios.post(url, FormData)
        .then(()=> {
            //window.alert("...Created...")
            props.history.push('/hooksuser')
        });
       
    }
        

    return (<>

            <div className="container p-5">
                <h3 className="py-3 text-center">User Registration Form</h3>
                <div className="container w-50">
                    <form onSubmit={submitHandler.bind(this)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            value={name} name="name"
                            onChange={ formDatahandling.bind(this) } />
                            
                        </div>
                       
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            value={email} name="email"
                            onChange={ formDatahandling.bind(this) }/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" className="form-control"
                            value={phone} name="phone"
                            onChange={formDatahandling.bind(this) }/> 
                        </div>
                        
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                            
                        </div>
                        <p className="text-primary">{txtConformation}</p>
                    </form>
                </div>
            </div>

    </>)

}