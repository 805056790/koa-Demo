import {takeEvery} from 'redux-saga'
import {put, all, take, call} from 'redux-saga/effects'
import {eventChannel, END} from 'redux-saga'

import authSaga from './sagas/auth';
import commonSaga from './sagas/common'

export default function* rootSaga() {
  yield all([
    ...authSaga,
    ...commonSaga
  ])
}