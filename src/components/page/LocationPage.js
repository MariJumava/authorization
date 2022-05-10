import { baseTheme } from '../../styles/baseTheme';
import { ButtonPrimary } from '../../styles/buttons';
import { TitlePlants } from '../../styles/title';
import { Logo } from '../Navbar';
import location from '../../pictures/location_page/location.png';
import wave from '../../pictures/service_page/wave.png';
import logo from '../../pictures/home_page/logo.svg';
import styled from 'styled-components';

const Wrap = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
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
`;
const Wave = styled.div`
  width: 1440px;
  min-width: 375px;
  max-width: 1600px;
  height: 300px;
  background-image: url(${wave});
  background-size: cover;
`;
const Title = styled(TitlePlants)`
  margin: 0;
  color: #d2ffcb;
`;
const SubTitle = styled.h4`
  width: 400px;
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitle}px;
  text-align: center;
  color: ${baseTheme.colors.primary};
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
        <ButtonPrimary>Contact Me</ButtonPrimary>
      </Container>
      <Wave></Wave>
    </Wrap>
  );
};
