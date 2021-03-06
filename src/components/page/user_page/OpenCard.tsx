import styled from 'styled-components';
import { baseTheme } from 'styles/baseTheme';
import { TitlePlants } from 'styles/title';
import { ButtonClose } from 'styles/buttons';
import { Name } from './UserPlants';
import { IPlant } from 'components/Plants';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;
export const Container = styled.div`
  position: absolute;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 40px;
  background: ${baseTheme.colors.white};
  border-radius: 50px 10px 10px 10px;
`;
export const Title = styled(TitlePlants)`
  font-size: ${baseTheme.fontSize.titleImg}px;
`;
export const Descrption = styled(Name)`
  color: ${baseTheme.colors.black};
`;

export const OpenCard = ({
  selectedPlant,
  closeOpenCard,
}: {
  selectedPlant: IPlant;
  closeOpenCard: () => void;
}) => {
  return (
    <Wrap>
      <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
      <Container>
        <Title>{selectedPlant.name}</Title>
        <Descrption>{selectedPlant.description}</Descrption>
        <span>{selectedPlant.price}$</span>
      </Container>
    </Wrap>
  );
};
