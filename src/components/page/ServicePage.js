import { SubTitle, TitlePrimary } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
import service from '../../pictures/service_page/service.png';
import wave from '../../pictures/service_page/wave.png';
import card_service from '../../pictures/service_page/card_service.png';
import styled from 'styled-components';

const Wrap = styled.div`
  padding-left: 40px;
`;
const Wave = styled.div`
  width: 1440px;
  min-width: 375px;
  max-width: 1600px;
  height: 300px;
  background-image: url(${wave});
  background-size: cover;
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
`;
const Container = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
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
`;
const Text = styled(SubTitle)`
  text-align: start;
`;
const Button = styled(ButtonPrimary)``;

export const ServicePage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Mask>
            <Wrap>
              <TitlePrimary>Service for home plants.</TitlePrimary>
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
