import { takeEvery } from 'redux-saga'
import { put ,all} from 'redux-saga/effects'
export function* helloSaga() {
  console.log('Hello Sagas!----');
}


// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  console.log("------这边执行了吗")
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}