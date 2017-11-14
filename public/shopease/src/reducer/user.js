import {handleActions} from 'redux-actions';
import {USERINIT, USERJOIN, USERLEAVE} from "../action/Action";
import socketClient from '../socket';


const initialState = [];

const user = handleActions({
  [USERINIT]: (state, action) => {
    return action.payload;
  },
  [USERJOIN]: (state, action) => {
    return [...state, {username: action.payload.username, id: action.payload.id}];
  },
  [USERLEAVE]: (state, action) => {
    return state.filter((v, i) => v.id === action.id);
  }
}, initialState);
export default {
  user
};