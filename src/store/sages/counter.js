import { takeEvery, delay, put } from "redux-saga/effects";

function* asyncAdd({ payload }) {
  /* 延时2s加一个固定数字 put可以当做dispatch*/
  yield delay(2000);
  yield put({
    //派发同步action,这个action会给到reducer（这里的put就是dispatch）
    type: "add",
    payload,
  });
}
export default function* index() {
  yield takeEvery("watchAdd", asyncAdd);
}
