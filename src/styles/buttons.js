import { baseTheme } from './baseTheme';
import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  color: ${baseTheme.colors.primary};
  cursor: pointer;
  :hover {
    background: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.secondary};
  }
`;

export const ButtonPrimary = styled.button`
  width: 260px;
  height: 60px;
  font-size: ${baseTheme.fontSize.subtitle}px;
  color: ${baseTheme.colors.primary};
  background: linear-gradient(90deg, rgba(127, 202, 33, 0.8) 0%, #105200 100%);
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
`;

export const ButtonSecondary = styled.button`
  width: 260px;
  height: 60px;
  margin: 40px auto 24px;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitle}px;
  color: ${baseTheme.colors.primary};
  background: ${baseTheme.colors.dropDown};
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
  :hover {
    background: ${baseTheme.colors.transition};
    color: ${baseTheme.colors.secondary};
  }
`;

export const ButtonLogout = styled.button`
  width: 160px;
  height: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  font-weight: ${baseTheme.fontWeight.weight};
  background: ${baseTheme.colors.transition};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
