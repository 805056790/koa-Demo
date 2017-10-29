import {combineReducers} from 'redux';
import {handleActions} from "redux-actions";

const initialState = {
  isLogin: false,
  loading: false,
  data: [],
  status: null
};

const login = handleActions({
  ["LOGINSTART"]: (state, action) => ({
    ...state,
    status: 'pending',
    loading: true,
    isLogin: false
  }),
  ["LOGINSUCCESS"]: (state, action) => ({
    ...state,
    status: 'success',
    loading: false,
    data: action.data,
    isLogin: true
  }),
  ["LOGINERROR"]: (state, action) => ({
    ...state,
    status: "error",
    loading: false,
    isLogin: false
  })
},initialState);
export default combineReducers({
  login
})
