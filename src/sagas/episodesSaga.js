import { put, call, take } from "redux-saga/effects";

import { loadEpisodes, setEpisodes, setError } from "../actions/episodes";
import { SHOW } from "../constants/show";
import { fetchEpisodes } from "../api";

export function* workerEpisodesRequest(id) {
  // Try to connect 3 times and if no connection through an error
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadEpisodes(id));
      const result = yield call(fetchEpisodes, id);
      yield put(setEpisodes(result));
      return true;
    } catch (e) {
      // console.log(e);
    }
  }
  yield put(setError());
}

export default function* watchEpisodesRequest() {
  // Load episodes after show loaded successfully
  const { id } = yield take(SHOW.LOAD_SUCCESS);
  yield call(workerEpisodesRequest, id);
}
