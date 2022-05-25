import { nanoid } from 'nanoid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import user_photo from '../../pictures/profile/user_photo.png';

export interface IUser {
  id?: string;
  username?: string;
  email: string;
  password: string;
  token?: string;
  img?: { user_photo: string };
}

export interface IStore {
  user: IUser;
  loading: boolean;
  authorized: boolean;
  isRegistrated: boolean;
  error: string | null;
}

const initialState: IStore = {
  user: {
    id: nanoid(),
    username: '',
    email: '',
    password: '',
    token: '',
    img: { user_photo },
  },
  loading: false,
  authorized: false,
  isRegistrated: false,
  error: '',
};

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
      state.isRegistrated = true;
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
      state.user.email = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  handleSignUp,
  logout,
  EditUserName,
  EditUserEmail,
  EditUserPassword,
  verificationEmail,
} = userSlice.actions;

export default userSlice.reducer;
