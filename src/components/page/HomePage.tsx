import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PATH } from '../../utils/ROUTES';
import { Logo } from '../Navbar';
import { device } from '../../styles/device';
import { useAppSelector } from '../../hooks/redux';
import { baseTheme } from '../../styles/baseTheme';
import { Button, ButtonSecondary } from '../../styles/buttons';
import {
  MainTitle,
  SubTitle,
  TitlePlants,
  Name,
  NumberPlants,
} from '../../styles/title';
import leaves from '../../pictures/home_page/leaves.jpg';
import logo from '../../pictures/home_page/logo.svg';
import foliage from '../../pictures/home_page/foliage.png';
import roses from '../../pictures/home_page/roses.png';
import strawberry from '../../pictures/home_page/strawberry.png';
import succulent from '../../pictures/home_page/succulent.png';

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
    color: ${baseTheme.colors.white};
  }
`;
const Slider = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${leaves});
  background-size: cover;
`;
const Main = styled(MainTitle)`
  @media ${device.mobileL} {
    width: 80%;
  }
`;
const SubTitleWhite = styled(SubTitle)`
  @media ${device.tablet} {
    width: 90%;
  }
`;
const SubTitleGr = styled.p`
  font-weight: ${baseTheme.fontWeight.weight};
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-align: center;
  text-transform: uppercase;
  color: ${baseTheme.colors.grannySmithApple};
  cursor: default;
`;
const Text = styled.p`
  width: 50%;
  margin: auto;
  font-weight: ${baseTheme.fontWeight.normal};
  font-size: ${baseTheme.fontSize.list}px;
  text-align: center;
  color: ${baseTheme.colors.black};
  cursor: default;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 200px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.laptopL} {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ImgType = styled.img`
  margin-right: 15px;
`;
export const Wrapper = styled.div`
  position: relative;
  object-fit: fill;
`;

export const HomePage = () => {
  const isAuthorized = useAppSelector((state) => state.user.authorized);
  const plants = useAppSelector((state) => state.user.plants);

  const foliageCategory = plants?.filter((el) => el.category === 'Foliage');
  const succulentCategory = plants?.filter((el) => el.category === 'Succulent');
  const flowerCategory = plants?.filter((el) => el.category === 'Flower');
  const fruitCategory = plants?.filter((el) => el.category === 'Fruit');

  const navigate = useNavigate();
  const followFoliage = () => {
    navigate('/shop/foliage');
  };
  const followFlower = () => {
    navigate('/shop/flower');
  };

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
        <Main>Let us find your love plants.</Main>
        <SubTitleWhite>
          Add some color to your home, give it a little attention, the plants
          will accompany you quietly
        </SubTitleWhite>
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
        <Wrapper onClick={followFoliage}>
          <ImgType src={foliage} />
          <Name>Foliage</Name>
          <NumberPlants>{foliageCategory.length} Plants</NumberPlants>
        </Wrapper>
        <Wrapper onClick={followFlower}>
          <ImgType src={roses} />
          <Name>Flower</Name>
          <NumberPlants>{flowerCategory.length} Plants</NumberPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={succulent} />
          <Name>Succulent</Name>
          <NumberPlants>{succulentCategory.length} Plants</NumberPlants>
        </Wrapper>
        <Wrapper>
          <ImgType src={strawberry} />
          <Name>Fruit</Name>
          <NumberPlants>{fruitCategory.length} Plants</NumberPlants>
        </Wrapper>
      </Container>
    </Wrap>
  );
};
