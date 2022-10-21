import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
//Global variable
const url=`http://localhost:3002/users`



class Restapi extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            userData: []
        }
    }

    componentDidMount()
    {
        axios.get(url).then( (result)=> this.setState({   userData:result.data}));
    }

    DeleteHandler = (id) =>
    {
        
        if(window.confirm(`Delete the Record Number is ${id}?`))
        {
            axios.delete(`${url}/${id}`);
            axios.get(url).then( (result)=> this.setState({ userData:result.data}));
        }
    }

    render()
    {
        
        return(
        <>
            <div className="container p-5">
              <h3 className="text-center">FETCH RESRAPI DATA USING LOCAL URL/CLIENT</h3>
                <table className="table table-dark table-bordered my-5">
                    <thead className="table table-info">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Phone</th>
                            <th colSpan="3" className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.userData.map((res,i)=>
                        {
                            return(
                            <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.phone}</td>
                                    <td>
                                        <Link to={`/restapi/view/${res.id}`} className="btn btn-primary ">View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/restapi/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={()=> this.DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
                                    </td>
                            </tr>)
                            })
                        }
                    </tbody>
                </table>
              
            </div>
            </>);
    }
   
}

export default Restapi