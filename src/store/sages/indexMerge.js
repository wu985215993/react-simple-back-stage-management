import { all, call } from "redux-saga/effects";
import counterSage from "./counter";
import shopcartSaga from "./shopcart";
import usersSage from "./users";

export default function* index() {
  yield all([call(counterSage), call(shopcartSaga),call(usersSage)]);
}
