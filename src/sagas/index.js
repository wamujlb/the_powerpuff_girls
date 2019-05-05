import { all } from 'redux-saga/effects';

import showSaga from './showSaga';
import episodesSaga from './episodesSaga';
import episodeSaga from './episodeSaga';

export default function* rootSaga() {
    yield all([
        showSaga(),
        episodesSaga(),
        episodeSaga(),
    ]);
}