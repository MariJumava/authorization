import { Title, Text, Button } from './ServicePage';
import { Wrapper, Name, NumPlants, ImgType } from './HomePage';
import wave from '../../pictures/service_page/wave.png';
import shop from '../../pictures/shop_page/shop.png';
import foliage from '../../pictures/home_page/foliage.png';
import roses from '../../pictures/home_page/roses.png';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 1440px;
  height: 900px;
  min-width: 375px;
  object-fit: fill;
`;
const ImgBackground = styled.img`
  position: absolute;
  top: 600px;
`;
const Container = styled.div`
  position: absolute;
  left: 484px;
  top: 190px;
  border-radius: 16px;
`;
const Wrap1 = styled.div`
  position: absolute;
`;
const Wrap2 = styled.div`
  display: flex;
  position: absolute;
  top: 200px;
  left: 192px;
`;

export const ShopPage = () => {
  return (
    <Wrap>
      <Img src={shop} />
      <ImgBackground src={wave} />
      <Container>
        <Wrap1>
          <Title>Service for home plants.</Title>
          <Text>
            If you do not know what plants you can add to the space,we can
            provide you with selected plants,and configure your space.
          </Text>
          <Button>Try for service</Button>
        </Wrap1>
        <Wrap2>
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
        </Wrap2>
      </Container>
    </Wrap>
  );
};
