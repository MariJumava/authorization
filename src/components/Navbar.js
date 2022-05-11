import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../utils/ROUTES';
import { logout, loginFailure } from '../redux/action';
import { ButtonLogout } from '../styles/buttons';
import {
  DropDownList,
  DropDownListContainer,
  ListItem,
} from '../styles/dropDown';
import { baseTheme } from '../styles/baseTheme';
import logo from '../pictures/home_page/logo.svg';
import styled from 'styled-components';

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
  @media (max-width: 768px) {
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
  @media (min-width: 769px) and (max-width: 1023px) {
    left: 10%;
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

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ openBurger }) =>
      openBurger ? baseTheme.colors.transition : baseTheme.colors.primary};
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
export const Logo = styled.img`
  width: 40px;
  object-fit: fill;
`;
const Title = styled.h3`
  font-size: ${baseTheme.fontSize.subtitle}px;
  a:link {
    color: ${baseTheme.colors.primary};
  }
  a:visited {
    color: ${baseTheme.colors.primary};
  }
`;

export const Navbar = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <Title>
          <NavLink to={PATH.MAIN}>
            <Logo src={logo} />
          </NavLink>
        </Title>
        <Title>
          <NavLink to={PATH.SERVICE}>Service</NavLink>
        </Title>
        <div>
          <Title onMouseEnter={() => setIsMenuOpen(true)}>
            <NavLink to={PATH.SHOP}>Shop</NavLink>
          </Title>
          {isMenuOpen && (
            <DropDownListContainer onMouseLeave={() => setIsMenuOpen(false)}>
              <DropDownList>
                <ListItem>
                  <NavLink to={PATH.FOLIAGE}>Foliage</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={PATH.SUCCULENT}>Succulent</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={PATH.FLOWER}>Flower</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to={PATH.FRUIT}>Fruit</NavLink>
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </div>
        <Title>
          <NavLink to={PATH.PROFILE}>Profile</NavLink>
        </Title>
        <Title>
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
