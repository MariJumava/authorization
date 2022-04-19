import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth/Login';
import { NotFound } from '../auth/NotFound';
import { SignUp } from '../auth/SignUp';
import { HomePage } from '../components/HomePage';
import { Navbar } from '../components/Navbar';
import { UserPage } from '../components/UserPage';

export const Navigator = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
