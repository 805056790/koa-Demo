import {combineReducers} from 'redux';
import auth from './auth';
import modalShow from './modalShow';
import chat from './chat';

export default combineReducers({
  ...auth,
  ...modalShow,
  ...chat
})