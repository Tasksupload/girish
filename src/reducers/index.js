import { combineReducers } from 'redux'


import empReducer from './empReducer'
import studentReducer from './studentReducer'
import userReducer from './userReducer'

var rootReducer = combineReducers({
    empReducer, studentReducer, userReducer
});
export default rootReducer;