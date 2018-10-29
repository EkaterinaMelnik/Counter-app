import {put, takeEvery, call, all} from 'redux-saga/effects';
import {delay} from 'redux-saga';

function* incrementAsync(action) {
    yield call(delay, 1500);
    yield put({type: 'INCREMENT', id: action.id})
}

function* decrementAsync(action) {
    yield call(delay, 1500);
    yield put({type: 'DECREMENT', id: action.id});
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ]);
}