import countReducer from './counter.js'
import shopcartReducer from './shopcart.js'
import { combineReducers } from "redux";

export default combineReducers({
    counter: countReducer,
    shopcart: shopcartReducer
})