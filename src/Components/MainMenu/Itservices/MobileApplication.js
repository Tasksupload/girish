import React from "react"
 
import pic from './../../../assets/images/img2.png'
function MobileApplication()
{
    return (<>

         
    <div className="container-fluid p-4 bg-info text-danger">

               <h2>Mobile Application Services</h2>

               <p>
                  IT services refers to the application of business and
                  technical expertise to enable organizations in the creation, management and optimization of or access
               </p>
               <div className="container text-center">
                       <img src={pic} className="w-75% mx-auto img-thumbnail" />
                </div>


     </div> 
    </>)}
export default MobileApplication;
