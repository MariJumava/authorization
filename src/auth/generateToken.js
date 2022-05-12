export const generateToken = (n) => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let token = '';

  for (let i = 0; i < n; i++) {
    let randomCharIndex = Math.floor(Math.random() * chars.length);

    token += chars[randomCharIndex];
  }

  return token;
};
