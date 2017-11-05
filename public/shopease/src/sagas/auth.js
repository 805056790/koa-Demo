import {takeEvery, delay} from 'redux-saga'
import {put, all, take, call} from 'redux-saga/effects'
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

export function* loginSaga() {
  while (true) {
    const action = yield take(LOGINSTART);
    try {
      let result = yield call(post, "/login", {
        username: action.payload.username,
        password: action.payload.password
      });
      console.log(result);
      yield put({type: LOGINSUCCESS, data: result.data});
      //触发登录socket
      socketClient.emit("login", action.payload.username);

      history.push("/chat");
    }
    catch (err) {
      yield put({type: LOGINERROR, error: err.message})
    }
  }
}

export function* regSaga() {
  while (true) {
    const action = yield take(REGSTART);
    try {
      let result = yield call(post, "/reg", {
        username: action.payload.username,
        password: action.payload.password
      });
      yield delay(1000);
      yield put({type: REGSUCCESS, data: result.data});
      yield put({type: MODALSHOW, component: <MessModal title="112334"/>})
      yield delay(1000);
      yield put({type: MODALHIDE});

      history.push("/");
    }
    catch (err) {
      yield put({type: REGERROR, error: err.message})
    }
  }
}

export default [
  loginSaga(),
  regSaga()
]

