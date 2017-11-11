import {handleActions} from 'redux-actions';
import {USERJOIN, USERLEAVE} from "../action/Action";

const initialState = [];

const user = handleActions({
  [USERJOIN]: (state, action) => {
    return [...state, [{username: action.username, id: action.id}]];
  },
  [USERLEAVE]: (state, action) => {
    return state.filter((v, i) => v.id === action.id);
  }
}, initialState);
export default {
  user
};