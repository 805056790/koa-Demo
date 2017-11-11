import {takeEvery, delay} from 'redux-saga'
import {put, all, take, call, fork} from 'redux-saga/effects'
import {post} from "../logics/rpc";
import {eventChannel, END} from 'redux-saga'
import {
  LOGINERROR, loginStart, LOGINSTART, LOGINSUCCESS, MODALHIDE, MODALSHOW, REGERROR, REGSTART,
  REGSUCCESS, userJoin
} from "../action/Action";
import MessModal from "../components/modal/MessModal";
import React from 'react';
import history from '../history/history';
import socketClient from '../socket';

function* subscribe(socket) {
  return eventChannel((emit) => {
    socket.on("users.login", function (user) {
      console.log("---------这边登录事件触发了吗")
      emit(userJoin({id: user.id, username: user.username}));
    });
    return () => {
    };
  })
}

function* subSaga() {
  const channel = yield call(subscribe, socketClient);

  while (true) {
    let action = yield take(channel);
    yield put(action);
  }

}

export default [
  subSaga()
]
