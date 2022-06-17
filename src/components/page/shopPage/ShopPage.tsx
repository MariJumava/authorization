import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PATH } from '../../../utils/ROUTES';
import { ListItem } from '../../DropDown';
import { Wrapper, ImgType } from '../HomePage';
import { useAppSelector } from 'hooks/redux';
import { baseTheme } from '../../../styles/baseTheme';
import {
  Name,
  NumberPlants,
  TitlePrimary,
  SubTitle,
} from '../../../styles/title';
import { ButtonPrimary } from '../../../styles/buttons';
import { device } from '../../../styles/device';
import { Wave } from '../ServicePage';
import shop from '../../../pictures/shop_page/shop.png';
import foliage from '../../../pictures/home_page/foliage.png';
import roses from '../../../pictures/home_page/roses.png';

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: 180px;
`;
const WrapPlants = styled.div`
  display: flex;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
const WrapInfo = styled.div`
  width: 500px;
  height: 500px;
  @media ${device.tablet} {
    display: none;
  }
`;
const HiddenLink = styled.div`
  @media ${device.tablet} {
    display: block;
    padding: 20px;
    margin: 200px auto;
    font-size: 40px;
    background: ${baseTheme.colors.MSUGreen};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    box-sizing: border-box;
  }
  @media (min-width: 769px) and ${device.desktop} {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${shop});
  background-size: cover;
  border-radius: 16px;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const Title = styled(TitlePrimary)`
  width: auto;
  @media ${device.tablet} {
    width: 70%;
    margin: 0;
  }
`;
const Text = styled(SubTitle)`
  width: auto;
  text-align: start;
  @media ${device.tablet} {
    width: 70%;
  }
`;

export const ShopPage = () => {
  const plants = useAppSelector((state) => state.user.plants);

  const foliageCategory = plants?.filter((el) => el.category === 'Foliage');
  const flowerCategory = plants?.filter((el) => el.category === 'Flower');

  const navigate = useNavigate();
  const followFoliage = (): void => {
    navigate('/shop/foliage');
  };
  const followFlower = (): void => {
    navigate('/shop/flower');
  };

  return (
    <>
      <Container>
        <HiddenLink>
          <ListItem>
            <NavLink to={PATH.FOLIAGE}>Foliage</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={PATH.SUCCULENT}>Succulent</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={PATH.FLOWER}>Flower</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={PATH.FRUIT}>Fruit</NavLink>
          </ListItem>
        </HiddenLink>
        <Wrap>
          <WrapInfo>
            <Title>Service for home plants.</Title>
            <Text>
              If you do not know what plants you can add to the space,we can
              provide you with selected plants,and configure your space.
            </Text>
            <ButtonPrimary>Try for service</ButtonPrimary>
          </WrapInfo>
          <WrapPlants>
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
          </WrapPlants>
        </Wrap>
        <Wave></Wave>
      </Container>
    </>
  );
};
