import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATH } from '../utils/ROUTES';
import { logout, loginFailure } from '../redux/action';
import logo from '../pictures/home_page/logo.svg';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 25%;
  width: 680px;
  height: 40px;
  margin: 50px auto 0;
  object-fit: fill;
  overflow: hidden;
`;
export const Logo = styled.img`
  width: 40px;
`;
const Title = styled.h3`
  font-size: 20px;
  a:link {
    color: #ffffff;
  }
  a:visited {
    color: #ffffff;
  }
`;
const DropDownContainer = styled.div``;
const DropDownListContainer = styled.div`
  position: fixed;
  left: 33%;
  width: 240px;
  text-align: center;
`;
const DropDownList = styled.ul`
  padding: 10px 0;
  margin: 0;
  background: #213f36;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 1.3rem;
`;
const ListItem = styled.li`
  list-style: none;
  padding: 5px;
  a:link {
    color: #ffffff;
  }
  a:visited {
    color: #ffffff;
  }
  a:hover {
    color: #000000;
  }
  :hover {
    background: #b7eaaf;
`;
const ButtonLogout = styled.button`
  width: 160px;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  background: #b7eaaf;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    color: red;
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
        <DropDownContainer>
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
        </DropDownContainer>
        <Title>
          <NavLink to={PATH.PROFILE}>Profile</NavLink>
        </Title>
        <Title>
          <NavLink to={PATH.LOCATION}>location</NavLink>
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
