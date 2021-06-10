import { takeEvery, delay, put, call } from "redux-saga/effects";
import { getShopcartApi, changeNumApi } from "../../apis/shopcart";

function* asyncAdd({ payload }) {
  /* 延时2s加一个固定数字 put可以当做dispatch*/
  yield delay(2000);
  yield put({
    //派发同步action,这个action会给到reducer（这里的put就是dispatch）
    type: "add",
    payload,
  });
}
//获取购物车数据，并把数据存到状态机里面
function* getData() {
  const data = yield call(getShopcartApi);
  // console.log("data",data);
  yield put({
    type: "setData",
    payload: data,
  });
}
function* changeNum({ payload }) {
  yield call(changeNumApi, payload);
  yield put({
    type: "watchGetData",
  });
}
export default function* index() {
  /* 
  //asyncAdd这个type被redux-saga监听了，一旦被派发，则监听函数test会自动执行
        takeEvery 两个参数
            参数一： 你要监听的type
            参数二： 回调函数，一旦saga监听到你派发的action中的type字段刚好是参数一
            则该回调函数就会执行
    */
  yield takeEvery("watchAdd", asyncAdd);
  yield takeEvery("watchGetData", getData);
  yield takeEvery("watchChangeNum", changeNum);
}
