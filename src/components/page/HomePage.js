import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PATH } from '../../utils/ROUTES';
import leaves from '../../pictures/home_page/leaves.jpg';
import logo from '../../pictures/home_page/logo.svg';
import foliage from '../../pictures/home_page/foliage.png';
import roses from '../../pictures/home_page/roses.png';
import strawberry from '../../pictures/home_page/strawberry.png';
import succulent from '../../pictures/home_page/succulent.png';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const HiddenNavbar = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  font-size: 20px;
  a:visited {
    color: #ffffff;
  }
`;
const Logo = styled.img`
  width: 40px;
  object-fit: fill;
`;
export const Title = styled.h2`
  position: absolute;
  left: calc(50% - 500px / 2);
  top: 250px;
  width: 500px;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(240, 255, 172, 0.8) 0%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
export const SubTitle = styled.h4`
  position: absolute;
  width: 500px;
  height: 117px;
  left: calc(50% - 500px / 2);
  top: 428px;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
const Button = styled.button`
  position: absolute;
  width: 200px;
  height: 40px;
  left: calc(50% - 200px / 2);
  top: 717px;
  font-size: 18px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
`;
const ButtonTry = styled.button`
  width: 260px;
  height: 60px;
  margin: 40px auto 24px;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  background: #375739;
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
  :hover {
    background: #b7eaaf;
    color: #000000;
  }
`;
const SubTitleGr = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #b7eaaf;
  cursor: default;
`;
const Text = styled.p`
  width: 432px;
  margin: auto;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  cursor: default;
`;
const Img = styled.img`
  max-width: 1600px;
  min-width: 375px;
  object-fit: fill;
`;
const TitlePlants = styled.h2`
  font-weight: 700;
  font-size: 60px;
  text-align: center;
  color: #355342;
  cursor: default;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 200px;
`;
export const ImgType = styled.img`
  margin-right: 15px;
`;
export const Wrapper = styled.div`
  position: relative;
  object-fit: fill;
`;
export const Name = styled.h6`
  position: absolute;
  top: 24px;
  left: 24px;
  margin: 0;
  font-size: 30px;
  color: #ffffff;
`;
export const NumPlants = styled.p`
  position: absolute;
  left: 24px;
  bottom: 24px;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const HomePage = () => {
  const isAuthorized = useSelector((state) => state.authorized);

  return (
    <Wrap>
      <Img src={leaves} />
      {!isAuthorized ? (
        <HiddenNavbar>
          &nbsp;
          <Logo src={logo} />
          <NavLink to={PATH.LOGIN}>Login</NavLink>
        </HiddenNavbar>
      ) : null}
      <Title>Let us find your love plants.</Title>
      <SubTitle>
        Add some color to your home, give it a little attention, the plants will
        accompany you quietly
      </SubTitle>
      <Button>Watch the video</Button>
      <ButtonTry>Try for service</ButtonTry>
      <SubTitleGr>Get a beautiful home</SubTitleGr>
      <Text>
        If you do not know what plants you can add to the space We can provide
        you with selected plants And configure your space
      </Text>
      <TitlePlants>4 types of plants</TitlePlants>
      <Container>
        <Wrapper>
          <ImgType src={foliage} />
          <Name>Foliage</Name>
          <NumPlants>21 Plants</NumPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={roses} />
          <Name>Flower</Name>
          <NumPlants>4 Plants</NumPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={succulent} />
          <Name>Succulent</Name>
          <NumPlants>8 Plants</NumPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={strawberry} />
          <Name>Strawberry</Name>
          <NumPlants>10 Plants</NumPlants>
        </Wrapper>
      </Container>
    </Wrap>
  );
};
