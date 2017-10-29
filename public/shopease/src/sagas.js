import {takeEvery} from 'redux-saga'
import {put, all, take, call} from 'redux-saga/effects'
import {post, request} from "./logics/rpc";
import {eventChannel, END} from 'redux-saga'

export function* helloSaga() {
  console.log('Hello Sagas!----');
}


// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'})
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  console.log("------这边执行了吗")
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* loginSaga() {
  console.log("---login的saga")
  while (true) {
    let action = yield take("LOGINSTART");
    console.log(action.payload, "-----payload----");
    try {
      let result = yield call(post, "/login", {
        username: action.payload.username,
        password: action.payload.password
      });
      console.log(result);
      yield put({type: "LOGINSUCCESS", data: result.data});
    }
    catch (err) {
      yield put({type: "LOGINERROR", error: err.message})
    }
  }
}


// creates an event Channel from an interval of seconds
function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1;
        if (secs > 0) {
          emitter(secs)
        } else {
          // this causes the channel to close
          emitter(END)
        }
      }, 1000);
      // The subscriber must return an unsubscribe function
      return () => {
        clearInterval(iv)
      }
    }
  )
}

export function* saga() {
  const chan = yield call(countdown, 3);
  console.log(chan, "ACTION__________");
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan);

      console.log(`countdown: ${seconds}`)
    }
  } finally {
    console.log('countdown terminated')
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    loginSaga(),
    saga()
  ])
}