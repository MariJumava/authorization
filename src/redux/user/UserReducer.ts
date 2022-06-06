import { nanoid } from 'nanoid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import user_photo from '../../pictures/profile/user_photo.png';
import { IPlant, plants } from 'components/Plants';

export interface IUser {
  id?: string;
  username?: string;
  email: string;
  password: string;
  token?: string;
  img?: { user_photo: string };
  myplants?: IPlant[];
}

export interface IStore {
  plants: IPlant[];
  user: IUser;
  loading: boolean;
  authorized: boolean;
  isRegistrated: boolean;
  error: string | null;
}

export interface IPlantEdit {
  id: string;
  count: number;
}

const initialState: IStore = {
  plants: plants,
  user: {
    id: nanoid(),
    username: '',
    email: '',
    password: '',
    token: '',
    img: { user_photo },
    myplants: [],
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
    addPlant(state, action: PayloadAction<IPlant>) {
      const plantsUser = [...state.user.myplants];
      state.user = {
        ...state.user,
        myplants: [...plantsUser, action.payload],
      };
    },
    deletePlant(state, action: PayloadAction<string>) {
      state.user.myplants = state.user.myplants?.filter(
        (el) => el.id !== action.payload
      );
    },
    editPlant(state, action: PayloadAction<IPlantEdit>) {
      state.user = {
        ...state.user,
        myplants: state.user.myplants?.map((selectPlant) => {
          if (selectPlant.id === action.payload.id) {
            selectPlant.count = action.payload.count;
          }
          return selectPlant;
        }),
      };
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
  addPlant,
  deletePlant,
  editPlant,
} = userSlice.actions;

export default userSlice.reducer;
