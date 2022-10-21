
import React from "react"
//Functional component
import Home from './MainMenu/Home'
import About from './MainMenu/About'
import Services from './MainMenu/Services'
import Contact from './MainMenu/Contact'
import Header from './MainMenu/Header'
import Footer from './MainMenu/Footer'

import Itservices from './MainMenu/Itservices'
import Pagenotfound from './MainMenu/Pagenotfound'

//Class component
import Myclass from './Myclass'
import Lifecycle from './MainMenu/Lifecycle'
import Restapi from './MainMenu/Restapi'
import Signup from './MainMenu/Signup'
import View from './MainMenu/Restapi/view'
import Edit from './MainMenu/Restapi/Edit'
import ReactReduxConnection from './MainMenu/ReactReduxConnection'
import ReactBootstrap from './MainMenu/reactbootstrap/ReactBootstrap'

//hooks
import RHuseState from './MainMenu/useStateHooks'
import RHuseEffect from './MainMenu/useEffectHooks'
import Pagination from './MainMenu/Pagination'
import Hooksuser from './HooksAPI/hooksUser'
import HooksView from './HooksAPI/hooksView'
import HooksEdit from './HooksAPI/hooksEdit'
import HooksSignup from './HooksAPI/hooksSignup'
import HooksRedux from './HooksRedux/HooksRedux'

//Routing package
import { BrowserRouter, Route,Link, Switch, Redirect } from 'react-router-dom';



function Routings()
{
    return (
        <BrowserRouter>

            {/* Header Link*/}
              <Header />
            {/* Header Link */}
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/lifecycle" component={Lifecycle} />
            <Route exact path="/restapi" component={Restapi} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/restapi/view/:idno" component={View} />
            <Route path="/restapi/edit/:idno" component={Edit} />
            <Route path="/myclass" component={Myclass} />
            <Route path="/rrc" component={ReactReduxConnection} />
            <Route path="/rhuseState" component={RHuseState} />
            <Route path="/rhuseEffect" component={RHuseEffect} />
            <Route path="/pagination" component={Pagination} />
            <Route exact path="/hooksUser" component={Hooksuser} />
            <Route path="/hooksUser/view/:idno" component={HooksView} />
            <Route path="/hooksUser/edit/:idno" component={HooksEdit} />
            <Route path="/hooksSignup" component={HooksSignup} />
            <Route path="/hooksredux" component={HooksRedux} />
            
            <Route path="/Itservices" component={Itservices} />
            <Route path="/rb" component={ReactBootstrap} />
            <Redirect to="/home" />
            <Route  component={Pagenotfound} />
            </Switch>
            {/* Footer Link*/}
            <Footer />
            {/* Footer Link */}

            
        </BrowserRouter>
    )
}
export default Routings;

