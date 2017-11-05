import {handleActions} from 'redux-actions';
import {MODALHIDE, MODALSHOW} from "../action/Action";
import React from "react";

const initialState = [];
let key = 0;
const modal = handleActions({
  [MODALSHOW]: (state, action) => {
    console.log(action.payload, "----------")
    //根据传递进来的组件，克隆出一个新的组件push到state状态里面
    const newComponent = React.cloneElement(
      action.component,
      {key: key++, key: state.length + 1}
    );
    let newState = [...state, newComponent];
    return newState;
  },
  [MODALHIDE]: (state, action) => {
    return state.slice(0, state.length - 1);
  }
}, initialState);

export default {
  modal
}