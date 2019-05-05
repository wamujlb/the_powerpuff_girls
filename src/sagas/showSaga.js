// @flow
import { put, call, take } from "redux-saga/effects";

import { loadShow, setShow, setError } from "../actions/show";
import { SHOW } from "../constants/show";
import { fetchShow } from "../api";

export function* workerShowRequest(id: string) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadShow(id));
      const result = yield call(fetchShow, id);
      yield put(setShow(result, id));
      return true;
    } catch (e) {
      //   console.log(e);
    }
  }
  yield put(setError());
}

export default function* watchShowRequest() {
  while (true) {
    const { id } = yield take(SHOW.LOAD);
    yield call(workerShowRequest, id);
  }
}
