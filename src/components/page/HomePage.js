import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PATH } from '../../utils/ROUTES';
import { Logo } from '../Navbar';
import { Button, ButtonSecondary } from '../../styles/buttons';
import {
  MainTitle,
  TitlePlants,
  SubTitle,
  Name,
  NumberPlants,
} from '../../styles/title';
import { baseTheme } from '../../styles/baseTheme';
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
  align-items: center;
`;
const HiddenNavbar = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  a:visited {
    color: ${baseTheme.colors.primary};
  }
`;
const Slider = styled.div`
  width: 1440px;
  min-width: 375px;
  max-width: 1600px;
  height: 900px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${leaves});
  background-size: cover;
`;
const SubTitleGr = styled.p`
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-align: center;
  text-transform: uppercase;
  color: ${baseTheme.colors.transition};
  cursor: default;
`;
const Text = styled.p`
  width: 432px;
  margin: auto;
  font-weight: ${baseTheme.fontWeight.normal};
  font-size: ${baseTheme.fontSize.list}px;
  text-align: center;
  color: ${baseTheme.colors.secondary};
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

export const HomePage = () => {
  const isAuthorized = useSelector((state) => state.authorized);

  return (
    <Wrap>
      <Slider>
        {!isAuthorized ? (
          <HiddenNavbar>
            &nbsp;
            <Logo src={logo} />
            <NavLink to={PATH.LOGIN}>Login</NavLink>
          </HiddenNavbar>
        ) : null}
        <MainTitle>Let us find your love plants.</MainTitle>
        <SubTitle>
          Add some color to your home, give it a little attention, the plants
          will accompany you quietly
        </SubTitle>
        <Button>Watch the video</Button>
      </Slider>
      <ButtonSecondary>Try for service</ButtonSecondary>
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
          <NumberPlants>21 Plants</NumberPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={roses} />
          <Name>Flower</Name>
          <NumberPlants>4 Plants</NumberPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={succulent} />
          <Name>Succulent</Name>
          <NumberPlants>8 Plants</NumberPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={strawberry} />
          <Name>Strawberry</Name>
          <NumberPlants>10 Plants</NumberPlants>
        </Wrapper>
      </Container>
    </Wrap>
  );
};
