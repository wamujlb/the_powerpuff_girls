import { put, call, take } from "redux-saga/effects";

import { setEpisode, setError } from "../actions/episode";
import { EPISODE } from "../constants/episode";
import { fetchEpisode } from "../api";

export function* workerEpisodeRequest(showId, season, episode) {
  // Try to connect 3 times and if no connection through an error
  for (let i = 0; i < 3; i++) {
    try {
      const result = yield call(fetchEpisode, showId, season, episode);
      yield put(setEpisode(result));
      return true;
    } catch (e) {}
  }
  yield put(setError());
}

export default function* watchEpisodeRequest() {
  while (true) {
    const { showId, season, episode } = yield take(EPISODE.LOAD);
    yield call(workerEpisodeRequest, showId, season, episode);
  }
}
