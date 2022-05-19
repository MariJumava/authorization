import { nanoid } from 'nanoid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { Authorization, UserAction } from './UserTypes';

export interface IUser {
  id?: string;
  username?: string;
  email: string;
  password: string;
  token?: string;
  img?: any;
}

export interface IStore {
  user: IUser;
  loading: boolean;
  authorized: boolean;
  error: string | null;
}

const initialState: IStore = {
  user: {
    id: nanoid(),
    username: 'test',
    email: 'test@mail.ru',
    password: '123q',
    token: '',
    img: '',
  },
  loading: false,
  authorized: false,
  error: '',
};

// export const userReducer = (
//   state = initialState,
//   action: UserAction
// ): IStore => {
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.authorized = true;
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.authorized = false;
      state.error = action.payload;
    },
    handleSignUp(state) {
      state.authorized = true;
      state.loading = false;
    },
    logout(state) {
      state.authorized = false;
      state.loading = false;
    },
    EditUserName(state, action: PayloadAction<string>) {
      state.user = { ...state.user, username: action.payload };
    },
    EditUserEmail(state, action: PayloadAction<string>) {
      state.user = { ...state.user, email: action.payload };
    },
    EditUserPassword(state, action: PayloadAction<string>) {
      state.user = { ...state.user, password: action.payload };
    },
    verificationEmail(state, action: PayloadAction<string>) {
      state.user = { ...state.user, email: action.payload };
      state.loading = false;
    },
  },
});
//   switch (action.type) {
//     case Authorization.LOGIN_START: {
//       return {
//         ...state,
//         loading: true,
//       };
//     }
//     case Authorization.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         authorized: true,
//       };
//     }
//     case Authorization.LOGIN_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         authorized: false,
//         error: action.payload,
//       };
//     case Authorization.REGISTERED:
//       return {
//         ...state,
//         authorized: true,
//         loading: false,
//       };
//     case Authorization.LOGOUT:
//       return {
//         ...state,
//         authorized: false,
//         loading: false,
//       };
//     case Authorization.EDIT_NAME_USER:
//       return {
//         ...state,
//         user: { ...state.user, username: action.payload },
//       };
//     case Authorization.EDIT_EMAIL_USER:
//       return {
//         ...state,
//         user: { ...state.user, email: action.payload },
//       };
//     case Authorization.EDIT_PASSWORD_USER:
//       return {
//         ...state,
//         user: { ...state.user, password: action.payload },
//       };
//     case Authorization.VERIFICATION:
//       return {
//         ...state,
//         user: { ...state.user, email: action.payload },
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
export default userSlice.reducer;
