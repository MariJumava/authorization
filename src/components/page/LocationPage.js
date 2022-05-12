import { baseTheme } from '../../styles/baseTheme';
import { ButtonPrimary } from '../../styles/buttons';
import { TitlePlants } from '../../styles/title';
import { Logo } from '../Navbar';
import { Wave } from '../page/ServicePage';
import location from '../../pictures/location_page/location.png';
import logo from '../../pictures/home_page/logo.svg';
import styled from 'styled-components';

const Wrap = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${location});
  background-size: cover;
`;
const Container = styled.div`
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 180px auto 0;
  background: rgba(33, 63, 54, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 12px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 85%;
    height: 50vh;
    margin: 80px auto 0;
    padding: 10px;
  }
`;
const Title = styled(TitlePlants)`
  margin: 0;
  color: #d2ffcb;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: ${baseTheme.fontSize.titleImg}px;
  }
`;
const SubTitle = styled.h4`
  width: 100%;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitle}px;
  text-align: center;
  color: ${baseTheme.colors.primary};
  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 10px;
    font-size: ${baseTheme.fontSize.subtitleImg}px;
  }
`;
const Button = styled(ButtonPrimary)`
  @media (min-width: 320px) and (max-width: 768px) {
    width: 140px;
    height: 40px;
    font-size: ${baseTheme.fontSize.subtitleImg}px;
  }
`;

export const LocationPage = () => {
  return (
    <Wrap>
      <Container>
        <Logo src={logo} />
        <Title>Location</Title>
        <SubTitle>
          No. 100, Ln. 00, Chifeng St., Datong Dist., Taipei City 103, Taiwan
          (R.O.C.)
        </SubTitle>
        <SubTitle>Open 11:00 - 22:00</SubTitle>
        <Button>Contact Me</Button>
      </Container>
      <Wave></Wave>
    </Wrap>
  );
};
