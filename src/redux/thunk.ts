import { nanoid } from 'nanoid';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { users } from '../components/Users';
import { delay } from '../fakeBackend/delay';
import { RootState } from './user';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  handleSignUp,
  verificationEmail,
} from './user/UserReducer';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const loginUser =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      await delay(1000);
      const response = users.find(
        (us) => us.email === email && us.password === password
      );
      if (response) {
        localStorage.setItem('authToken', (response.token = nanoid()));
        dispatch(loginSuccess(response));
      } else {
        dispatch(loginFailure('Wrong email or password'));
      }
    } catch (error) {
      console.log('error', error);
      dispatch(loginFailure('Ooops!'));
    }
  };

export const registeredUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loginStart());
    await delay(1000);
    dispatch(handleSignUp());
    localStorage.setItem('authToken', nanoid());
  } catch (error) {
    console.log('error', error);
    dispatch(loginFailure('Something is wrong!'));
  }
};

export const compareEmail =
  (email: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      await delay(1000);
      const verification = users.find((us) => us.email === email);
      if (verification) {
        dispatch(verificationEmail(email));
      } else {
        dispatch(loginFailure('Wrong email'));
      }
    } catch (error) {
      console.log('error', error);
      dispatch(loginFailure('Ooops'));
    }
  };
