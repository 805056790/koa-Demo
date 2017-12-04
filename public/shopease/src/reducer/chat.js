import {handleActions} from 'redux-actions';
import {NEWMESSAGE, SENDERROR, SENDSTART, SENDSUCCESS} from "../action/Action";

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
      chatList: [...state.chatList, {message: action.payload.message, name: action.payload.name}],
      sendPadding: false
    }
  },
  [SENDERROR]: (state, action) => {
    return state;
  },
  [NEWMESSAGE]: (state, action) => {
    return {
      chatList: [...state.chatList, {message: action.payload.message, name: action.payload.username}],
      sendPadding: false
    }
  }
}, initialState);

export default {
  chat
}