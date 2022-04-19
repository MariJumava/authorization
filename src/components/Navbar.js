import { NavLink, useNavigate } from 'react-router-dom';
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
  margin: 0 60px;
`;

const ButtonLogout = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #808080;
  }
`;

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <>
      <Nav>
        <Wrap>
          <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
          <NavLink to="/user">Profile</NavLink>
        </Wrap>
        <Wrap>
          <ButtonLogout onClick={handleLogOut}>LogOut</ButtonLogout>&nbsp;&nbsp;
          <NavLink to="/signup">Registration</NavLink>
        </Wrap>
      </Nav>
    </>
  );
};
