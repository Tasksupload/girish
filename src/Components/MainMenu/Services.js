import React from "react"
import Servicedata from './../../assets/json/services.json'


//import { FontAwesomeIcon } from 'fontawesome/react-fontawesome'"icons":"facofee",
//import { facofee } from '@fontawesome/free-solid-svg-icons'
 

 
function Services()
{
    return (
        <>
         <div className="container-fluid" style={{backgroundColor:'#12151c'}}>
           <div className="container p-5 text-center">
            <h1 className="pt-2 pb-5 text-center text-white">Services</h1>
            
            <div className="row">
                {
                    Servicedata.map((data,i)=>
                    {
                        return(
                        <div className="col-lg-4" key={i}>
                    
                            <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                              {/** 
                             <p>  
                            <FontAwesome icon={data.icons} size="3x" className="fw-bold text-sucess" />
                            </p>*/}
                                
                                <div className="card-body">
                                    <h3 className="py-3">{data.title}</h3>
                                    <p className="text-justify">{data.desciption}</p>
                                </div>
                            </div>
                        </div>)  
                    })
                }
                
                {/*
                <div className="col-lg-4">
                    
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <p>
                            <FontAwesome icon={faCofee} size="3x" className="fw-bold text-sucess" />
                        </p>
                        
                        <div className="card-body">
                            <h3 className="py-3">UX/UI DESIGN</h3>
                            <p className="text-justify">
                            A random dummy paragraph generator is a tool that creates textual content. It is typically
                             used to generate placeholder texts by many websites as it is easy to insert, and the text 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <i className="fab fa-abode text-weight-bold text-success"></i>
                        <div className="card-body">
                            <h3 className="py-3">MARKETING</h3>
                            <p className="text-justify">
                            A random dummy paragraph generator is a tool that creates textual content. It is typically
                             used to generate placeholder texts by many websites as it is easy to insert, and the text 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <i className="fab fa-abode text-weight-bold text-success"></i>
                        <div className="card-body">
                            <h3 className="py-3">BRANDING</h3>
                            <p className="text-justify">
                            A random dummy paragraph generator is a tool that creates textual content. It is typically
                             used to generate placeholder texts by many websites as it is easy to insert, and the text 
                            
                            </p>
                        </div>
                    </div>
                </div>
                */}
            </div>
            </div>
            </div>

    </>
    )
}
export default Services;