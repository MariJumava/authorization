import { users } from '../components/Users';
import { delay } from '../fakeBackend/delay';
import { generateToken } from '../auth/generateToken';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  handleSignUp,
  verificationEmail,
} from './action';

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(loginStart(true));
    await delay(2000);
    const response = users.find(
      (us) => us.email === user.email && us.password === user.password
    );
    if (response) {
      localStorage.setItem('authToken', generateToken(32));
      dispatch(loginSuccess(response));
      dispatch(loginStart(false));
    } else if (!response) {
      dispatch(loginFailure('Wrong email or password'));
    }
  } catch (error) {
    console.log('error', error);
    dispatch(loginFailure('Something is wrong!'));
  }
};

export const registeredUser = () => async (dispatch) => {
  try {
    dispatch(loginStart(true));
    await delay(1000);
    dispatch(handleSignUp());
    localStorage.setItem('authToken', generateToken(32));
  } catch (error) {
    console.log('error', error);
    dispatch(loginFailure('Something is wrong!'));
  }
};

export const compareEmail = (email) => async (dispatch) => {
  try {
    console.log(email);
    dispatch(loginStart(true));
    await delay(1000);
    const verification = users.find((us) => us.email === email);
    console.log(verification);
    if (verification) {
      dispatch(verificationEmail(verification));
    } else if (!verification) {
      dispatch(loginFailure('Wrong email'));
    }
  } catch (error) {
    console.log('error', error);
    dispatch(loginFailure('Ooops!'));
  }
};
