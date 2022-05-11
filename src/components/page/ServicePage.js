import { SubTitle, TitlePrimary } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
import service from '../../pictures/service_page/service.png';
import wave from '../../pictures/service_page/wave.png';
import card_service from '../../pictures/service_page/card_service.png';
import styled from 'styled-components';

const Wrap = styled.div`
  padding-left: 40px;
`;
export const Wave = styled.div`
  width: 100%;
  min-width: 375px;
  height: 300px;
  background-image: url(${wave});
  background-size: cover;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 900px;
  min-width: 375px;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 180px auto 0;
  background-image: url(${card_service});
  border-radius: 16px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 80%;
    height: 300px;
    margin: 100px 20px;
    background: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    margin: 150px auto 0;
  }
`;
const Container = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${service});
  background-size: cover;
`;
const Mask = styled.div`
  width: 900px;
  height: 600px;
  border-radius: 16px;
  background: linear-gradient(
    113.96deg,
    #213f36 0%,
    rgba(33, 63, 54, 0.2) 100%
  );
  @media (min-width: 320px) and (max-width: 768px) {
    width: 85%;
    height: 300px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;
const Title = styled(TitlePrimary)`
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    font-size: 30px;
  }
`;
const Text = styled(SubTitle)`
  width: 70%;
  text-align: start;
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0;
    font-size: 15px;
  }
`;
const Button = styled(ButtonPrimary)`
  @media (min-width: 320px) and (max-width: 768px) {
    width: 150px;
    height: 35px;
    font-size: 15px;
  }
`;

export const ServicePage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Mask>
            <Wrap>
              <Title>Service for home plants.</Title>
              <Text>
                If you do not know what plants you can add to the space,we can
                provide you with selected plants,and configure your space.
              </Text>
              <Button>Try on service</Button>
            </Wrap>
          </Mask>
        </Wrapper>
        <Wave></Wave>
      </Container>
    </>
  );
};
