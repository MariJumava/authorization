import { Logo } from '../Navbar';
import location from '../../pictures/location_page/location.png';
import wave from '../../pictures/service_page/wave.png';
import logo from '../../pictures/home_page/logo.svg';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  max-width: 1600px;
  min-width: 375px;
  object-fit: fill;
`;
const ImgBackground = styled.img`
  position: absolute;
  top: 600px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 600px;
  height: 550px;
  left: 420px;
  top: 170px;
  background: rgba(33, 63, 54, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 12px;
`;
const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  color: #d2ffcb;
`;
const SubTitle = styled.h4`
  width: 400px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;
const Button = styled.button`
  width: 260px;
  height: 60px;
  font-size: 24px;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(127, 202, 33, 0.8) 0%, #105200 100%);
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
`;

export const LocationPage = () => {
  return (
    <Wrap>
      <Img src={location} />
      <ImgBackground src={wave} />
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
    </Wrap>
  );
};
