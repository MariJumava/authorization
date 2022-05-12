import { baseTheme } from './baseTheme';
import styled from 'styled-components';

export const DropDownListContainer = styled.div`
  position: fixed;
  left: 35%;
  width: 200px;
  text-align: center;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
export const DropDownList = styled.ul`
  padding: 10px 0;
  margin: 0;
  background: ${baseTheme.colors.background};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 1.3rem;
`;
export const ListItem = styled.li`
  list-style: none;
  padding: 5px;
  a:link {
    color: ${baseTheme.colors.primary};
  }
  a:visited {
    color: ${baseTheme.colors.primary};
  }
  a:hover {
    color: ${baseTheme.colors.secondary};
  }
  :hover {
    background: ${baseTheme.colors.transition};
`;
