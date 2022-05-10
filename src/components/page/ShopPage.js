import { Wrapper, ImgType } from './HomePage';
import { Name, NumberPlants, TitlePrimary, SubTitle } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
import wave from '../../pictures/service_page/wave.png';
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
const Wrap1 = styled.div`
  display: flex;
`;
const Container = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  background-image: url(${shop});
  background-size: cover;
  border-radius: 16px;
`;
const Wave = styled.div`
  width: 1440px;
  min-width: 375px;
  max-width: 1600px;
  height: 300px;
  background-image: url(${wave});
  background-size: cover;
`;
const Text = styled(SubTitle)`
  text-align: start;
`;
const Button = styled(ButtonPrimary)``;

export const ShopPage = () => {
  return (
    <>
      <Container>
        <Wrap>
          <div>
            <TitlePrimary>Service for home plants.</TitlePrimary>
            <Text>
              If you do not know what plants you can add to the space,we can
              provide you with selected plants,and configure your space.
            </Text>
            <Button>Try for service</Button>
          </div>
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
