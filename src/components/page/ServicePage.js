import service from '../../pictures/service_page/service.png';
import wave from '../../pictures/service_page/wave.png';
import card_service from '../../pictures/service_page/card_service.png';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: fit-content;
  object-fit: fill;
`;
const ImgBackground = styled.img`
  position: absolute;
  top: 600px;
`;
const Container = styled.div`
  position: absolute;
  left: 270px;
  top: 190px;
  border-radius: 16px;
`;
const Mask = styled.div`
  position: absolute;
  width: 900px;
  height: 600px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  background: linear-gradient(
    113.96deg,
    #213f36 0%,
    rgba(33, 63, 54, 0.2) 100%
  );
`;
const ImgCard = styled.img`
  object-fit: fill;
`;
export const Title = styled.h2`
  position: absolute;
  width: 500px;
  left: calc(50% - 500px / 2 - 160px);
  top: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  background: linear-gradient(
    180deg,
    rgba(240, 255, 198, 0.8) 0%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;
export const Text = styled.p`
  position: absolute;
  left: calc(50% - 500px / 2 - 160px);
  top: 248px;
  width: 500px;
  font-weight: 400;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
`;
export const Button = styled.button`
  position: absolute;
  width: 260px;
  height: 60px;
  left: calc(50% - 500px / 2 - 160px);
  top: 386px;
  font-size: 24px;
  color: #ffffff;
  background: linear-gradient(90deg, rgba(127, 202, 33, 0.8) 0%, #105200 100%);
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  cursor: pointer;
`;

export const ServicePage = () => {
  return (
    <Wrap>
      <Img src={service} />
      <ImgBackground src={wave} />
      <Container>
        <ImgCard src={card_service} />
        <Mask>
          <Title>Service for home plants.</Title>
          <Text>
            If you do not know what plants you can add to the space,we can
            provide you with selected plants,and configure your space.
          </Text>
          <Button>Try on service</Button>
        </Mask>
      </Container>
    </Wrap>
  );
};
