import styled from 'styled-components';
import { Container, Title, Text } from './ServicePage';
import { FoliageCard } from './FoliageCard';
import { device } from '../../styles/device';
import { baseTheme } from '../../styles/baseTheme';
import wave_white from '../../pictures/shop_page/wave_white.png';
import { useAppSelector } from 'hooks/redux';

const Wave = styled.div`
  height: 300px;
  background-image: url(${wave_white});
  background-size: cover;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
  text-align: center;
  @media ${device.tablet} {
    width: 80%;
  }
`;
const Wrapper = styled.div`
  width: 300px;
  max-height: 370px;
  margin-left: 30px;
  padding: 0 30px;
  background: ${baseTheme.colors.MSUGreen};
  border-radius: 12px;
  overflow-y: scroll;
`;
const Name = styled.h5`
  margin: 20px 0 0;
  font-size: ${baseTheme.fontSize.titleImg}px;
  color: ${baseTheme.colors.white};
`;
const NumberPlants = styled.h6`
  margin: 0;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  text-transform: uppercase;
  color: ${baseTheme.colors.grannySmithApple};
`;

export const FoliagePage = () => {
  const plants = useAppSelector((state) => state.user.plants);
  const userPlants = useAppSelector((state) => state.user.user.myplants);

  const isShowButton = (id: string) => () => {
    return !userPlants?.find((item) => item.id === id);
  };

  return (
    <>
      <Container>
        <Wrap>
          <Title>Foliage for plants.</Title>
          <Text>
            Add some color to your home, give it a little attention, the plants
            will accompany you quietlyю
          </Text>
        </Wrap>
        <Wrapper>
          <Name>Foliage for plants</Name>
          <NumberPlants>{plants.length} plants</NumberPlants>
          <div>
            {plants?.map((plant) => {
              return (
                <FoliageCard
                  key={plant.id}
                  plant={plant}
                  isShowButton={isShowButton(plant.id)()}
                />
              );
            })}
          </div>
        </Wrapper>
        <Wave></Wave>
      </Container>
    </>
  );
};