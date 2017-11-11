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



