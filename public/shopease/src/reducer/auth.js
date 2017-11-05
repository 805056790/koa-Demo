import {handleActions} from "redux-actions";
import {LOGINERROR, LOGINSTART, LOGINSUCCESS, REGERROR, REGSTART, REGSUCCESS} from "../action/Action";

const initialState = {
  isLogin: false,
  loading: false,
  data: [],
  status: null
};

const login = handleActions({
  [LOGINSTART]: (state, action) => ({
    ...state,
    status: 'pending',
    loading: true,
    isLogin: false
  }),
  [LOGINSUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    loading: false,
    data: action.data,
    isLogin: true
  }),
  [LOGINERROR]: (state, action) => ({
    ...state,
    status: "error",
    loading: false,
    isLogin: false
  })
}, initialState);
const initialStateReg = {
  status: null,
  isLoading: false
};

const reg = handleActions({
  [REGSTART]: (state, action) => ({
    status: 'pending',
    isLoading: true
  }),
  [REGSUCCESS]: (state, action) => ({
    status: 'success',
    isLoading: false
  }),
  [REGERROR]: (state, action) => ({
    status: 'error',
    isLoading: false,
    message: action.message
  })
}, initialStateReg);

export default {
  login,
  reg
}
