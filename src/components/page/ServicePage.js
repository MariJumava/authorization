import { SubTitle, TitlePrimary } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
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
const Text = styled(SubTitle)`
  left: calc(50% - 500px / 2 - 160px);
  top: 248px;
  text-align: start;
`;
const Button = styled(ButtonPrimary)`
  position: absolute;
  top: 471px;
  left: calc(50% - 500px / 2 - 160px);
`;

export const ServicePage = () => {
  return (
    <Wrap>
      <Img src={service} />
      <ImgBackground src={wave} />
      <Container>
        <ImgCard src={card_service} />
        <Mask>
          <TitlePrimary>Service for home plants.</TitlePrimary>
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
