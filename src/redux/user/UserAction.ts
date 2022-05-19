import {
  Authorization,
  SetLoginStart,
  SetLoginSuccess,
  SetLoginFailure,
  Logout,
  HandleSignUp,
  SetEditUserName,
  SetEditUserEmail,
  SetEditUserPassword,
  SetVerificationEmail,
  IUserFind,
} from './UserTypes';
import { IUser } from './UserReducer';

export const loginStart = (): SetLoginStart => {
  return {
    type: Authorization.LOGIN_START,
  };
};

export const loginSuccess = (user: IUser): SetLoginSuccess => {
  return {
    type: Authorization.LOGIN_SUCCESS,
    payload: { email: user.email, password: user.password },
  };
};

export const loginFailure = (error: string | null): SetLoginFailure => {
  return {
    type: Authorization.LOGIN_FAILURE,
    payload: error,
  };
};

export const handleSignUp = (): HandleSignUp => {
  return {
    type: Authorization.REGISTERED,
  };
};

export const logout = (): Logout => {
  return {
    type: Authorization.LOGOUT,
  };
};

export const EditUserName = (username: string): SetEditUserName => {
  return {
    type: Authorization.EDIT_NAME_USER,
    payload: username,
  };
};

export const EditUserEmail = (email: string): SetEditUserEmail => {
  return {
    type: Authorization.EDIT_EMAIL_USER,
    payload: email,
  };
};

export const EditUserPassword = (password: string): SetEditUserPassword => {
  return {
    type: Authorization.EDIT_PASSWORD_USER,
    payload: password,
  };
};

export const verificationEmail = (email: string): SetVerificationEmail => {
  return {
    type: Authorization.VERIFICATION,
    payload: email,
  };
};
