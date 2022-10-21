import React from "react"

// Nested component
import WebApplication from './Itservices/WebApplication';
import MoblieApplication from "./Itservices/MobileApplication";
import UIDesignService from './Itservices/ux-uidesign';
import SupportService from "./Itservices/support";



//import External local JSON data into component
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


var Services=[
    {
        title:"Web Application",
        routeName:'/Web-App'
    },
    {
        title:"Mobile Application",
        routeName:'/mobile-App'
    },
    {
        title:"UX-UI Design",
        routeName:'/ux-ui'
    },
    {
        title:"Project Support",
        routeName:'/support'
    }
]

function ItServices()
{
    return (<>
         
<BrowserRouter>
    <div className="container-fluid bg-dark text-white">
               <h2>IT SERVICES</h2>
               <p>IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access

                </p>
       <div>
        <div className="coontainer my-5">
           <div className="row">
            
              <div className="col-lg-3 ">
                {/** 
              <ul className="list-group ">
                 <li className="list-group-item">
                    <Link to="/itservices/webApp">WebApplicationService</Link>
                 </li>
                 <li className="list-group-item">
                    <Link to="/itservices/mobileApp">moblieApplicationService</Link>
                 </li>
                 <li className="list-group-item">
                    <Link to="/itservices/uxuiApp">UX-UIDesignService</Link>
                 </li>
                 <li className="list-group-item">
                    <Link to="/itservices/support">ProjectSupportService</Link>
                 </li>
            </ul>*/}


            <ul className="list-group  ">
                {
                    Services.map((data,i)=>
                    {
                        return(
                            <li className="list-group-item bg-dark" key={i}>
                        <Link to={`/Itservices${data.routeName}`}className="text-success fs-4" >
                            {data.title} 
                        </Link>                             
                        </li>)                                    
                    })
                }
            </ul>
            
               {/* LEFT_COLUMN*/}
              </div>

              <div className="col-lg-9">
               {/* NESTED ROUTER*/}

                
                <Switch>
                  <Route exact path="/Itservices" component={WebApplication} />
                  <Route path="/Itservices/Web-App" component={WebApplication} />
                  <Route path="/Itservices/mobile-App" component={MoblieApplication} />
                  <Route path="/Itservices/ux-ui" component={UIDesignService}/>

                  <Route path="/Itservices/support"  component={SupportService} />
                  
                </Switch>


                {/* NESTED ROUTER*/}
              </div>
          </div> 
      </div>    
      </div>
    </div>
    
</BrowserRouter>
    </>)}
export default ItServices;

