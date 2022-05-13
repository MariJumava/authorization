import { NavLink } from 'react-router-dom';
import { PATH } from '../utils/ROUTES';
import styled from 'styled-components';
import { device } from '../styles/device';
import { baseTheme } from '../styles/baseTheme';

export const DropDownListContainer = styled.div`
  text-align: center;
  @media ${device.tablet} {
    display: none;
  }
`;
export const DropDownList = styled.ul`
  display: none;
  position: fixed;
  left: 35%;
  z-index: 100;
  width: 200px;
  padding: 10px 0;
  margin: 0;
  background: ${baseTheme.colors.MSUGreen};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 1.3rem;
`;
export const ListItem = styled.li`
display: block;
  list-style: none;
  padding: 5px;
  a:link {
    color: ${baseTheme.colors.white};
  }
  a:visited {
    color: ${baseTheme.colors.white};
  }
  a:hover {
    color: ${baseTheme.colors.black};
  }
  :hover {
    background: ${baseTheme.colors.grannySmithApple};
`;

export const DropDown = () => {
  return (
    <DropDownListContainer>
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
  );
};
