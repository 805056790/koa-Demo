import {handleActions} from 'redux-actions';
import {NEWMESSAGE, SENDSTART, SENDSUCCESS} from "../action/Action";

const initialState = {
  chatList: [],
  sendPadding: false
};

const chat = handleActions({
  [SENDSTART]: (state, action) => {
    return {
      ...state,
      sendPadding: true
    }
  },
  [SENDSUCCESS]: (state, action) => {
    return {
      chatList: [...state.chatList, {message: action.message, name: action.name}],
      sendPadding: false
    }
  },
  [SENDSUCCESS]: (state, action) => {
    return state;
  },
  [NEWMESSAGE]: (state, action) => {
    return {
      chatList: [...state.chatList, {message: action.message, name: action.name}],
      sendPadding: false
    }
  }
}, initialState);

export default {
  chat
}