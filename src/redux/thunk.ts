import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';
import { users } from '../components/Users';
import { delay } from '../fakeBackend/delay';
import { Authorization, IUserFind, UserAction } from './user/UserTypes';
import { IUser, userSlice } from './user/UserReducer';
import { AppDispatch } from './user';

export const loginUser =
  (email: string, password: string) =>
  //async (dispatch: Dispatch<UserAction>) => {
  async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.loginStart());
      //dispatch({ type: Authorization.LOGIN_START });
      await delay(1000);
      const response = users.find(
        (us) => us.email === email && us.password === password
      );
      if (response) {
        localStorage.setItem('authToken', (response.id = nanoid()));
        dispatch(userSlice.actions.loginSuccess(response));
        // dispatch({ type: Authorization.LOGIN_SUCCESS, payload: response });
      } else {
        dispatch(userSlice.actions.loginFailure('Wrong email or password'));
        // dispatch({
        //   type: Authorization.LOGIN_FAILURE,
        //   payload: 'Wrong email or password',
        // });
      }
    } catch (error) {
      console.log('error', error);
      dispatch(userSlice.actions.loginFailure('Wrong email or password'));
      // dispatch({
      //   type: Authorization.LOGIN_FAILURE,
      //   payload: 'Something is wrong!',
      // });
    }
  };

export const registeredUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginStart);
    // dispatch({ type: Authorization.LOGIN_START });
    await delay(1000);
    dispatch(userSlice.actions.handleSignUp);
    //dispatch({ type: Authorization.REGISTERED });
    localStorage.setItem('authToken', nanoid(32));
  } catch (error) {
    console.log('error', error);
    dispatch(userSlice.actions.loginFailure('Something is wrong!'));
    // dispatch({
    //   type: Authorization.LOGIN_FAILURE,
    //   payload: 'Something is wrong!',
    // });
  }
};

export const compareEmail =
  (email: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.loginStart);
      //dispatch({ type: Authorization.LOGIN_START });
      await delay(1000);
      const verification = users.find((us) => us.email === email);
      if (verification) {
        dispatch(userSlice.actions.verificationEmail);
        //dispatch({ type: Authorization.VERIFICATION, payload: email });
      } else {
        dispatch(userSlice.actions.loginFailure('Wrong email'));
        // dispatch({ type: Authorization.LOGIN_FAILURE, payload: 'Wrong email' });
      }
    } catch (error) {
      console.log('error', error);
      dispatch(userSlice.actions.loginFailure('Ooops'));
      //dispatch({ type: Authorization.LOGIN_FAILURE, payload: 'Ooops!' });
    }
  };
