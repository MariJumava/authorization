import { Navigator } from './navigation/Navigator';
import { useAuth } from './auth/useAuth';
import { Loader } from './auth/Loader';
import { AuthContext } from './auth/AuthContext';
import jwt_decode from 'jwt-decode';

export const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;

  if (token) {
    const expiration = jwt_decode(token);
    const now = new Date().getTime();
    console.log(expiration.exp * 1000, now);
    if (expiration.exp * 1000 <= now) {
      console.log('EXPIRED');
      logout();
    } else {
      console.log('NOT EXPIRED');
    }
  }

  if (!ready) {
    return <Loader />;
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuthenticated,
        }}
      >
        <Navigator />
      </AuthContext.Provider>
    </>
  );
};
