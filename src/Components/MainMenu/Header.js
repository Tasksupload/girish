import React from "react"

import { Link,NavLink } from 'react-router-dom';


function Header()
{
    var MenuNames =["Home", "About", "Services", "Itservices", "Contact", "Restapi",  "RB", "Lifecycle",
     "Myclass","Signup", "Rrc", "RHuseState","RHuseEffect","Pagination", "HooksUser","HooksSignup","HooksRedux"]
    return (
        <>
                <nav className="navbar navbar-expand-lg" 
                    style=
                    {{
                        backgroundColor:'#2a3341' ,
                        borderBottom:' 0.5px #2a422e solid' ,
                        borderTop:' 1px white solid'
                    }}
                >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    {/* 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="text-white bg-dark" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    */}
                    <ul className="navbar-nav">
                        {
                            MenuNames.map((data, i) =>
                            <li className="nav-item " key={i}>
                                <NavLink className="nav-link text-white" activeClassName="bg-dark" to={`/${data.toLocaleLowerCase()}`}>
                                {data}
                                </NavLink>
                            </li>
                            )
                        }
                    </ul>
                    </div>
                </div>
                </nav>

        </>
    
    )
    
}
export default Header;