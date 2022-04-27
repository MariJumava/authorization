import { uniqueId } from 'lodash';
import user_photo from '../pictures/user_photo.png';

export const users = [
  {
    id: uniqueId(),
    email: 'test@mail.ru',
    username: 'test',
    img: user_photo,
    password: '123q',
  },
  { id: uniqueId(), email: 'qw@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'er@ty.ru', username: 'hgb' },
  { id: uniqueId(), email: 'zx@cv.ru', username: 'hgb' },
  { id: uniqueId(), email: 'qwe@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'qwer@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'qwty@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'zxc@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'cvb@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'bnm@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'fgh@er.ru', username: 'hgb' },
  { id: uniqueId(), email: 'fbgj@er.ru', username: 'hgb' },
];
