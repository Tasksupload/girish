
import React from "react"
import ReactDOM from 'react-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Routings from './Components/Routings';



import { Provider } from "react-redux";

import store from "./store";


ReactDOM.render( <Provider store={store}>
    <Routings />
</Provider> , document.getElementById('root'))
/*
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routings />)
*/