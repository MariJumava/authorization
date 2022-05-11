import { NavLink } from 'react-router-dom';
import { PATH } from '../../utils/ROUTES';
import { Wrapper, ImgType } from './HomePage';
import {
  DropDownList,
  DropDownListContainer,
  ListItem,
} from '../../styles/dropDown';
import { Name, NumberPlants, TitlePrimary, SubTitle } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
import { Wave } from '../page/ServicePage';
import shop from '../../pictures/shop_page/shop.png';
import foliage from '../../pictures/home_page/foliage.png';
import roses from '../../pictures/home_page/roses.png';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: 180px;
`;
const DropWrap = styled.div`
  display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
    height: 470px;
  }
`;
const DropDownContainer = styled(DropDownListContainer)`
  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;
const Wrap1 = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
const Wrap2 = styled.div`
  width: 500px;
  height: 500px;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Container = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${shop});
  background-size: cover;
  border-radius: 16px;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
  }
`;
const Title = styled(TitlePrimary)`
  width: auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
    margin: 0;
  }
`;
const Text = styled(SubTitle)`
  width: auto;
  text-align: start;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }
`;
const Button = styled(ButtonPrimary)``;

export const ShopPage = () => {
  return (
    <>
      <Container>
        <Wrap>
          <DropWrap>
            <DropDownContainer>
              <DropDownList>
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
              </DropDownList>
            </DropDownContainer>
          </DropWrap>
          <Wrap2>
            <Title>Service for home plants.</Title>
            <Text>
              If you do not know what plants you can add to the space,we can
              provide you with selected plants,and configure your space.
            </Text>
            <Button>Try for service</Button>
          </Wrap2>
          <Wrap1>
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
          </Wrap1>
        </Wrap>
        <Wave></Wave>
      </Container>
    </>
  );
};
