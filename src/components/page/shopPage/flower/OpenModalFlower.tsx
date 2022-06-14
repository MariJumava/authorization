//import styled from 'styled-components';
import {
  Wrap,
  Container,
  Title,
  Descrption,
} from 'components/page/user_page/OpenCard';
import { ButtonClose } from 'styles/buttons';

export const OpenModalFlower = ({ selectedPlant, closeModalPlant }: any) => {
  return (
    <Wrap>
      <ButtonClose onClick={closeModalPlant}>&times;</ButtonClose>
      <Container>
        <Title>{selectedPlant.name}</Title>
        <Descrption>{selectedPlant.description}</Descrption>
        <span>{selectedPlant.price}$</span>
      </Container>
    </Wrap>
  );
};
