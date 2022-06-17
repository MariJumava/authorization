import styled from 'styled-components';
import {
  Wrap,
  Container,
  Title,
  Descrption,
} from 'components/page/user_page/OpenCard';
import { ButtonClose } from 'styles/buttons';
import { IPlant } from 'components/Plants';

const Img = styled.img`
  border-radius: 10px;
`;

export const OpenModalFlower = ({
  selectedPlant,
  closeModalPlant,
}: {
  selectedPlant: IPlant;
  closeModalPlant: () => void;
}) => {
  return (
    <Wrap>
      <ButtonClose onClick={closeModalPlant}>&times;</ButtonClose>
      <Container>
        <Img src={selectedPlant.img} />
        <Title>{selectedPlant.name}</Title>
        <Descrption>{selectedPlant.description}</Descrption>
        <span>{selectedPlant.price}$</span>
      </Container>
    </Wrap>
  );
};
