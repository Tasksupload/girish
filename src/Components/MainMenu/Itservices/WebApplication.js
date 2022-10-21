import React from "react"
import pic1 from './../../../assets/images/img1.png'

function WebApplication()
{
    return (<>
         
    <div className="container-fluid p-4 bg-info text-danger">


               <h2>WebApplicationService</h2>
               

               <p>
                  IT services refers to the application of business and
                  technical expertise to enable organizations in the creation, management and optimization of or access
               </p>
               <div className="container text-center">
                       <img src={pic1} className="w-95%  mx-auto img-thumbnail" />
                </div>

     </div> 
    </>)}
export default WebApplication;
