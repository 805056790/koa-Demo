//加一函数
import {DECREMENT, INCREMENT, INCREMENT_IF_ODD} from "./ActionType";

export function add() {
  return {
    type: INCREMENT
  }
}

//减一函数
export function dec() {
  return {
    type: DECREMENT
  }
}

//变偶函数
export function addIfODD() {
  return {
    type: INCREMENT_IF_ODD
  }
}

//关于异步加一
export function addAsync() {
  return {
    type: 'INCREMENT_ASYNC'
  }
}