import {put, takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

export function* incrementAsync(action) {
    yield call(delay, 1500);
    yield put({type: 'INCREMENT', id: action.id})
}

export function* decrementAsync(action) {
    yield call(delay, 1500);
    yield put({type: 'DECREMENT', id: action.id});
}
export default function* rootSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}