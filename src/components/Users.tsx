import { nanoid } from 'nanoid';
import user_photo from '../pictures/profile/user_photo.png';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  token: string;
  img?: any;
}

export const users: IUser[] = [
  {
    id: nanoid(),
    email: 'test@mail.ru',
    username: 'test',
    img: user_photo,
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'qw@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'er@ty.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'zx@cv.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'qwe@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'qwer@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'qwty@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'zxc@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'cvb@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'bnm@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'fgh@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
  {
    id: nanoid(),
    email: 'fbgj@er.ru',
    username: 'hgb',
    img: '',
    password: '123q',
    token: nanoid(),
  },
];
