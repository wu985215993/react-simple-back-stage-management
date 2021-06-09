// import { createStore,combineReducers } from "redux";

// import bigReducer from './reducers/index'

//对模块进行拆分
//合并reducer
/* const bigReducer = combineReducers({
  //key 数据切片的名字 value （管理该数据切片的reducer） 比如这个count 与 shopcart两个数据切片
  counter: countReducer,
  shopcart: shopcartReducer
})
 */

// export default createStore(bigReducer);
/* function reducer(state = { count: 0,list:[] }, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + action.payload,
      }
    case "setData":
      return{
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
} */

/* 
管理计数器的reducer
*/
/* function countReducer(state = { count:0},action){
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state;
  }
} */
/* 管理购物车的reducer */
/* function shopcartReducer(state = { list:[]},action){
  switch (action.type) {
    case "setData":
      return{
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
}
 */

/* 
  中间件的应用
*/
import { createStore , applyMiddleware } from 'redux'
import bigReducer from './reducers/index'

import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import rootSage from './sages/index'
const sagaMiddleware = createSagaMiddleware()

export default createStore(bigReducer,applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(rootSage)
