import { React, useState, useEffect } from 'react'
import axios from 'axios'

const apiurl=`https://fakestoreapi.com/products`
export default (props) =>
{
   // state object implementation by Hooks
   var [products, setStateProducts] =useState([]);
   
   // api call by hooks
   useEffect(() => {
            axios.get(apiurl).then((result)=>setStateProducts(result.data))
   }, [])


   return(<>
           <div className="container p-5">
                <h1 className=" text-center">React UseEffect Hooks for API Call</h1>
                <div className="row">
                    {
                        products.map((res,i)=>
                        {
                            return(<div className="col-lg-3" key={i}>
                                    <div className="card" >
                                        <img src={res.image} className="card-img-top w-100 mx-auto " style={{ height:'200px'}}  />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{res.title}</h6>
                                            <h5 className="card-title">${res.price}</h5>
                                            <p className="card-text">{res.description.slice(0, 50)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                         </div>
                                    </div>
                            </div>)
                        })
                    }
                </div>

           </div>
           
       </>)
}