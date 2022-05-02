import { uniqueId } from 'lodash';
import { ACTION_TYPES } from './consts';
import user_photo from '../pictures/user_photo.png';

const initialState = {
  user: {
    id: uniqueId(),
    username: 'test',
    email: 'test@mail.ru',
    password: '123q',
    token: null,
    img: user_photo,
  },
  loading: false,
  authorized: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        authorized: true,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        authorized: false,
        error: action.payload,
      };
    case ACTION_TYPES.REGISTERED:
      return {
        ...state,
        authorized: true,
        loading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        authorized: action.payload,
        loading: false,
      };
    case ACTION_TYPES.EDIT_NAME_USER:
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    case ACTION_TYPES.EDIT_EMAIL_USER:
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case ACTION_TYPES.EDIT_PASSWORD_USER:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case ACTION_TYPES.VERIFICATION:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
