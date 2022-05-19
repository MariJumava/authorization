import { IUser } from './UserReducer';

export enum Authorization {
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
  REGISTERED = 'REGISTERED',
  EDIT_NAME_USER = 'EDIT_NAME_USER',
  EDIT_EMAIL_USER = 'EDIT_EMAIL_USER',
  EDIT_PASSWORD_USER = 'EDIT_PASSWORD_USER',
  VERIFICATION = 'VERIFICATION',
}

export interface SetLoginStart {
  type: Authorization.LOGIN_START;
}
export interface SetLoginSuccess {
  type: Authorization.LOGIN_SUCCESS;
  payload: IUser;
}
export interface SetLoginFailure {
  type: Authorization.LOGIN_FAILURE;
  payload: string | null;
}
export interface HandleSignUp {
  type: Authorization.REGISTERED;
}
export interface Logout {
  type: Authorization.LOGOUT;
}
export interface SetEditUserName {
  type: Authorization.EDIT_NAME_USER;
  payload: string;
}
export interface SetEditUserEmail {
  type: Authorization.EDIT_EMAIL_USER;
  payload: string;
}
export interface SetEditUserPassword {
  type: Authorization.EDIT_PASSWORD_USER;
  payload: string;
}
export interface SetVerificationEmail {
  type: Authorization.VERIFICATION;
  payload: string;
}

export type UserAction =
  | SetLoginStart
  | SetLoginSuccess
  | SetLoginFailure
  | HandleSignUp
  | Logout
  | SetEditUserName
  | SetEditUserEmail
  | SetEditUserPassword
  | SetVerificationEmail;

export interface IUserFind {
  email: string;
  password: string;
}
