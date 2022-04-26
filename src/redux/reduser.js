import { uniqueId } from 'lodash';
import { ACTION_TYPES } from './consts';

const initialState = {
  user: {
    id: uniqueId(),
    email: '',
    password: '',
    token: null,
    birthday: null,
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
    default:
      return state;
  }
};
