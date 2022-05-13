import { ACTION_TYPES } from './consts';

export const loginStart = () => {
  return {
    type: ACTION_TYPES.LOGIN_START,
  };
};

export const loginSuccess = (user) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
    payload: error,
  };
};

export const handleSignUp = () => {
  return {
    type: ACTION_TYPES.REGISTERED,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const EditUserName = (username) => {
  return {
    type: ACTION_TYPES.EDIT_NAME_USER,
    payload: username,
  };
};

export const EditUserEmail = (email) => {
  return {
    type: ACTION_TYPES.EDIT_EMAIL_USER,
    payload: email,
  };
};

export const EditUserPassword = (password) => {
  return {
    type: ACTION_TYPES.EDIT_PASSWORD_USER,
    payload: password,
  };
};

export const verificationEmail = (email) => {
  return {
    type: ACTION_TYPES.VERIFICATION,
    payload: email,
  };
};
