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
  left: 25%;
  ${baseTheme.sizes.navbar};
  margin: 50px auto 0;
  object-fit: fill;
  overflow: hidden;
`;
export const Logo = styled.img`
  width: 40px;
  object-fit: fill;
`;
const Title = styled.h3`
  font-size: ${baseTheme.fontSize.subtitleImg}px;
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
      <Wrap>
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
