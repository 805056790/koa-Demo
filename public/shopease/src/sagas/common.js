import {takeEvery, delay} from 'redux-saga'
import {put, all, take, call, fork} from 'redux-saga/effects'
import {post} from "../logics/rpc";
import {eventChannel, END} from 'redux-saga'
import {
  LOGINERROR, loginStart, LOGINSTART, LOGINSUCCESS, MODALHIDE, MODALSHOW, newMessage, REGERROR, REGSTART,
  REGSUCCESS, userInit, userJoin
} from "../action/Action";
import MessModal from "../components/modal/MessModal";
import React from 'react';
import history from '../history/history';
import socketClient from '../socket';

function* subscribe(socket) {
  return eventChannel((emit) => {
    socket.on("users.login", function (user) {

      console.log("---------这边登录事件触发了吗");

      emit(userJoin({id: user.id, username: user.username}));

    });
    socket.on("users.init", function (user) {
      console.log("这边出发了在线用户的初始化", user);
      emit(userInit(user));
    });

    socket.on("new.mess", function (mess) {

      console.log("----这边新信息触发---", mess);
      emit(newMessage({username: mess.username, message: mess.mess}));

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
