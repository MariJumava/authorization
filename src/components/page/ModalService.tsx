// import styled from 'styled-components';
// import { baseTheme } from 'styles/baseTheme';
import { Wrap, Container } from '../page/user_page/OpenCard';
import { ButtonClose } from 'styles/buttons';

export const ModalService = ({ closeModalService }) => {
  return (
    <Wrap>
      <ButtonClose onClick={closeModalService}>&times;</ButtonClose>
      <Container>Try our service right now!</Container>
    </Wrap>
  );
};
