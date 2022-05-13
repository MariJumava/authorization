import styled from 'styled-components';
import { SubTitle, TitlePrimary } from '../../styles/title';
import { ButtonPrimary } from '../../styles/buttons';
import { baseTheme } from '../../styles/baseTheme';
import { device } from '../../styles/device';
import service from '../../pictures/service_page/service.png';
import wave from '../../pictures/service_page/wave.png';
import card_service from '../../pictures/service_page/card_service.png';

const Wrap = styled.div`
  padding-left: 40px;
`;
export const Wave = styled.div`
  height: 300px;
  background-image: url(${wave});
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 180px auto 0;
  background-image: url(${card_service});
  border-radius: 16px;
  @media ${device.tablet} {
    background: none;
  }
  @media ${device.laptop} {
    width: 80%;
  }
`;
const Container = styled.div`
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
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;
const Title = styled(TitlePrimary)`
  @media ${device.tablet} {
    width: 100%;
    font-size: ${baseTheme.fontSize.titleImg}px;
  }
`;
const Text = styled(SubTitle)`
  width: 70%;
  text-align: start;
  @media ${device.tablet} {
    font-size: ${baseTheme.fontSize.list}px;
  }
`;
const Button = styled(ButtonPrimary)`
  @media ${device.tablet} {
    width: 150px;
    height: 35px;
    font-size: ${baseTheme.fontSize.list}px;
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
