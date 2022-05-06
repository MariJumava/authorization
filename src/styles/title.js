import { baseTheme } from './baseTheme';
import styled from 'styled-components';

export const MainTitle = styled.h2`
  position: absolute;
  left: calc(50% - 500px / 2);
  top: 250px;
  width: 500px;
  font-style: normal;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.title}px;
  text-align: center;
  background: ${baseTheme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
export const TitlePrimary = styled.h2`
  position: absolute;
  width: 500px;
  left: calc(50% - 500px / 2 - 160px);
  top: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  background: linear-gradient(
    180deg,
    rgba(240, 255, 198, 0.8) 0%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
export const TitlePlants = styled.h2`
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.title}px;
  text-align: center;
  color: ${baseTheme.colors.dropDown};
  cursor: default;
`;

export const SubTitle = styled.h4`
  position: absolute;
  width: 500px;
  height: 117px;
  left: calc(50% - 500px / 2);
  top: 428px;
  font-weight: ${baseTheme.fontWeight.normal};
  font-size: ${baseTheme.fontSize.titleImg}px;
  text-align: center;
  color: ${baseTheme.colors.subtitle};
`;

export const Name = styled.h6`
  position: absolute;
  top: 24px;
  left: 24px;
  margin: 0;
  font-size: ${baseTheme.fontSize.titleImg}px;
  color: ${baseTheme.colors.primary};
`;

export const NumberPlants = styled.p`
  position: absolute;
  left: 24px;
  bottom: 24px;
  margin: 0;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-transform: uppercase;
  color: ${baseTheme.colors.primary};
`;
