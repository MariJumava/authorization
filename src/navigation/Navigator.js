import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth/Login';
import { NotFound } from '../auth/NotFound';
import { SignUp } from '../auth/SignUp';
import { HomePage } from '../components/page/HomePage';
import { Navbar } from '../components/Navbar';
import { PasswordRecovery } from '../components/page/PasswordRecovery';
import { UserPage } from '../components/page/UserPage';

export const Navigator = () => {
  const isAuthorized = localStorage.getItem('authToken');
  return (
    <>
      {isAuthorized && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
