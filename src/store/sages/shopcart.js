import { takeEvery, put, call } from "redux-saga/effects";
import { getShopcartApi, changeNumApi } from "../../apis/shopcart";
function* getData() {
  const data = yield call(getShopcartApi);
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
  yield takeEvery("watchGetData", getData);
  yield takeEvery("watchChangeNum", changeNum);
}
