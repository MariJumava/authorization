import styled from 'styled-components';
import { baseTheme } from './baseTheme';

export const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  color: ${baseTheme.colors.white};
  cursor: pointer;
  :hover {
    background: ${baseTheme.colors.white};
    color: ${baseTheme.colors.black};
  }
`;

export const ButtonPrimary = styled.button`
  width: 260px;
  height: 60px;
  font-size: ${baseTheme.fontSize.subtitle}px;
  color: ${baseTheme.colors.white};
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
  color: ${baseTheme.colors.white};
  background: ${baseTheme.colors.hunterGreen};
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
  :hover {
    background: ${baseTheme.colors.grannySmithApple};
    color: ${baseTheme.colors.black};
  }
`;

export const ButtonLogout = styled.button`
  width: 120px;
  height: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  font-weight: ${baseTheme.fontWeight.weight};
  color: ${baseTheme.colors.white};
  background: ${baseTheme.colors.hunterGreen};
  border: none;
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: ${baseTheme.colors.grannySmithApple};
    color: ${baseTheme.colors.black};
  }
`;

export const ButtonClose = styled.button`
  height: 100px;
  font-size: ${baseTheme.fontSize.titleImg}px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${baseTheme.colors.white};
`;
