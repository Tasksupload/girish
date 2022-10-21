import { applyMiddleware, createStore } from "redux"

import rootReducer from './../reducers/index'

import promiseMiddleware from 'redux-promise'

var store=createStore(rootReducer, applyMiddleware(promiseMiddleware));




export default store;