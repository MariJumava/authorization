import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PATH } from '../utils/ROUTES';
import { logout, loginFailure } from '../redux/action';
import { device } from '../styles/device';
import { ButtonLogout } from '../styles/buttons';
import { DropDown, DropDownList } from '../components/DropDown';
import { baseTheme } from '../styles/baseTheme';
import logo from '../pictures/home_page/logo.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  left: 25%;
  ${baseTheme.sizes.navbar};
  margin: 50px auto 0;
  object-fit: fill;
  overflow: hidden;
  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform: ${({ openBurger }) =>
      openBurger ? 'translateX(-100%)' : 'translateX(0)'};
    transition: transform 0.3s ease-in-out;
  }
`;
const Hamburger = styled.div``;
const Header = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 32px;
    height: 4px;
    background-color: ${({ openBurger }) =>
      openBurger ? baseTheme.colors.grannySmithApple : baseTheme.colors.white};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.3s ease-in-out;
    &:nth-child(1) {
      transform: ${({ openBurger }) =>
        openBurger ? 'rotate(0)' : 'rotate(45deg)'};
    }
    &:nth-child(2) {
      transform: ${({ openBurger }) =>
        openBurger ? 'translateX(0)' : 'translateX(100%)'};
      opacity: ${({ openBurger }) => (openBurger ? 1 : 0)};
    }
    &:nth-child(3) {
      transform: ${({ openBurger }) =>
        openBurger ? 'rotate(0)' : 'rotate(-45deg)'};
    }
  }
`;
const DropDownContent = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownList} {
    display: block;
  }
`;
export const Logo = styled.img`
  width: 40px;
  object-fit: fill;
`;
const Title = styled.h3`
  margin: 0;
  font-size: ${baseTheme.fontSize.subtitle}px;
  a:link {
    color: ${baseTheme.colors.white};
  }
  a:visited {
    color: ${baseTheme.colors.white};
  }
`;

export const Navbar = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const [openBurger, setOpenBurger] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(loginFailure(''));
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <Hamburger>
        <Header
          openBurger={openBurger}
          onClick={() => setOpenBurger(!openBurger)}
        >
          <div></div>
          <div></div>
          <div></div>
        </Header>
      </Hamburger>
      <Wrap openBurger={openBurger}>
        <Title onClick={() => setOpenBurger(!openBurger)}>
          <NavLink to={PATH.MAIN}>
            <Logo src={logo} />
          </NavLink>
        </Title>
        <Title onClick={() => setOpenBurger(!openBurger)}>
          <NavLink to={PATH.SERVICE}>Service</NavLink>
        </Title>
        <DropDownContent>
          <Title onClick={() => setOpenBurger(!openBurger)}>
            <NavLink to={PATH.SHOP}>Shop</NavLink>
          </Title>
          <DropDown />
        </DropDownContent>
        <Title onClick={() => setOpenBurger(!openBurger)}>
          <NavLink to={PATH.PROFILE}>Profile</NavLink>
        </Title>
        <Title onClick={() => setOpenBurger(!openBurger)}>
          <NavLink to={PATH.LOCATION}>Location</NavLink>
        </Title>
        {!isAuthorized ? (
          <NavLink to={PATH.REGISTRATION}>SignUp</NavLink>
        ) : null}
        {isAuthorized ? (
          <ButtonLogout onClick={handleLogOut}>LogOut</ButtonLogout>
        ) : (
          <span>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
          </span>
        )}
      </Wrap>
    </>
  );
};
