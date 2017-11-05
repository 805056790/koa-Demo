import {createAction} from 'redux-actions';

export const LOGINSTART = "LOGIN/START";
export const LOGINSUCCESS = "LOGIN/SUCCESS";
export const LOGINERROR = "LOGIN/ERROR";
export const REGSTART = "REG/START";
export const REGSUCCESS = "REG/SUCCESS";
export const REGERROR = "REG/ERROR";

export const MODALSHOW = "MODAL/SHOW";
export const MODALHIDE = "MODAL/HIDE";

export const SENDSTART = "SEND/START";
export const SENDSUCCESS = "SEND/SUCCESS";
export const SENDERROR = "SEND/ERROR";

export const NEWMESSAGE = "NEW/MESSAGE";

export const loginStart = createAction(LOGINSTART);
export const loginSuccess = createAction(LOGINSUCCESS);
export const loginError = createAction(LOGINERROR);

export const regStart = createAction(REGSTART);
export const regSuccess = createAction(REGSUCCESS);
export const regError = createAction(REGERROR);

export const modalShow = createAction(MODALSHOW);
export const modalHide = createAction(MODALHIDE);

export const sendStart = createAction(SENDSTART);
export const sendSuccess = createAction(SENDSUCCESS);
export const sendError = createAction(SENDERROR);

export const newMessage = createAction(NEWMESSAGE);