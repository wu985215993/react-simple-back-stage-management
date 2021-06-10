import { takeEvery, call, put } from "redux-saga/effects";

import { getAccountListApi, handleDeleteApi } from "../../apis/users";

function* getUserList() {
  const newResult = yield call(getAccountListApi);
  console.log("newResult", newResult);
  /* setData(
      newResult.data.map((item) => {
        item.key = item.account;
        return item;
      })
    ); */
  yield put({
    type: "setUserList",
    payload: newResult,
  });
}
function* confirmDelete({payload}) {
  yield call(handleDeleteApi,payload);
  //删除成功更新数据
  yield put({
    type: "watchGetUserList",
  });
}

export default function* index() {
  yield takeEvery("watchGetUserList", getUserList);
  yield takeEvery("watchDelete", confirmDelete);
}
