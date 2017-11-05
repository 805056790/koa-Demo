import {takeEvery, delay} from 'redux-saga'
import {put, all, take, call, fork} from 'redux-saga/effects'
import {post} from "../logics/rpc";
import {eventChannel, END} from 'redux-saga'
import {
  LOGINERROR, loginStart, LOGINSTART, LOGINSUCCESS, MODALHIDE, MODALSHOW, REGERROR, REGSTART,
  REGSUCCESS
} from "../action/Action";
import MessModal from "../components/modal/MessModal";
import React from 'react';
import history from '../history/history';
import socketClient from '../socket';

function* subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('users.login', (username) => {
      console.log("----1-2-3-4---");
      emit(username);
    });
    socket.on('users.logout', ({username}) => {
      emit();
    });
    socket.on('messages.new', ({message}) => {
      emit();
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => {
    };
    console.log("ddiididi")
  })
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  console.log(channel,"_---返回的东西")
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {

}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    let {payload} = yield take(LOGINSUCCESS);

    const task = yield fork(handleIO, socketClient);

  }
}

export default [
  flow()
]

