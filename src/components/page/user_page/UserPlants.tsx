import { useAppDispatch } from 'hooks/redux';
import { deletePlant } from 'redux/user/UserReducer';
import styled from 'styled-components';
import { baseTheme } from '../../../styles/baseTheme';
import { Button } from '../FoliageCard';

const Name = styled.div`
  margin: 5px 20px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.subtitle};
`;
const Wrap = styled.div`
  display: flex;
`;
const ButtonDelete = styled(Button)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${baseTheme.colors.hunterGreen};
  color: ${baseTheme.colors.white};
`;

export const UserPlants = ({ plant }) => {
  const dispatch = useAppDispatch();

  const deleteItem = (id: string) => {
    dispatch(deletePlant(id));
  };

  const removePlant = (event: any): void => {
    event.stopPropagation();
    deleteItem(plant.id);
  };

  return (
    <Wrap>
      <Name>{plant.name}</Name>
      <ButtonDelete onClick={removePlant}>x</ButtonDelete>
    </Wrap>
  );
};
