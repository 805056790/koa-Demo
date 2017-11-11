import {combineReducers} from 'redux';
import auth from './auth';
import modalShow from './modalShow';
import chat from './chat';
import user from './user';

export default combineReducers({
  ...auth,
  ...modalShow,
  ...chat,
  ...user
})