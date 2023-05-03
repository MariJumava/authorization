import { Routes, Route } from 'react-router-dom';
import { Login } from './auth/Login';
import { NotFound } from './auth/NotFound';
import { SignUp } from './auth/SignUp';
import { HomePage } from './components/page/HomePage';
import { LocationPage } from './components/page/LocationPage';
import { ShopPage } from './components/page/shopPage/ShopPage';
import { ServicePage } from './components/page/ServicePage';
import { Navbar } from './components/Navbar';
import { PasswordRecovery } from './auth/PasswordRecovery';
import { UserPage } from './components/page/user_page/UserPage';
import { useAppSelector } from './redux/redux';
import { FoliagePage } from './components/page/shopPage/foliage/FoliagePage';
import { FlowerPage } from 'components/page/shopPage/flower/FlowerPage';

export const App = () => {
  const isAuthorized = localStorage.getItem('authToken');
  const isAuthorizedStore = useAppSelector((state) => state.user.authorized);
  return (
    <>
      {isAuthorized && isAuthorizedStore && <Navbar />}
      <Routes>
        <Route path="/authorization" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/shop/foliage" element={<FoliagePage />} />
        <Route path="/shop/flower" element={<FlowerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
