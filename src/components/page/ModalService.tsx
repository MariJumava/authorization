import { Wrap, Container } from '../page/user_page/OpenCard';
import { ButtonClose } from 'styles/buttons';

type ModalPropsType = {
  closeModalService: () => void;
};

export const ModalService = (props: ModalPropsType) => {
  return (
    <Wrap>
      <ButtonClose onClick={props.closeModalService}>&times;</ButtonClose>
      <Container>Try our service right now!</Container>
    </Wrap>
  );
};
