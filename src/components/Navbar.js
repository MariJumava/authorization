import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 20px;
  background: #dcdcdc;
`;

const Wrap = styled.div`
  margin: 0 70px;
`;

const ButtonLogout = styled.button`
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const Navbar = () => {
  const isAuthorized = useSelector((state) => state.authorized);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    localStorage.clear();
    //window.location.href = '/login';
  };

  return (
    <>
      <Nav>
        <Wrap>
          <NavLink to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/user">Profile</NavLink>
        </Wrap>
        <Wrap>
          <NavLink to="/signup">SignUp</NavLink>
          &nbsp;&nbsp;&nbsp;
          {isAuthorized ? (
            <ButtonLogout onClick={handleLogOut}>LogOut</ButtonLogout>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          &nbsp;&nbsp;
        </Wrap>
      </Nav>
    </>
  );
};
