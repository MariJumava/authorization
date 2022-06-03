import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'hooks/redux';
import { deletePlant, editPlant } from 'redux/user/UserReducer';
import { baseTheme } from '../../../styles/baseTheme';
import { Button } from '../FoliageCard';
import { IPlant } from 'components/Plants';

export const Name = styled.div`
  margin: 5px 20px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.black};
  cursor: pointer;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 20px 40px;
  padding: 0 30px;
  background: ${baseTheme.colors.subtitle};
  border: none;
  border-radius: 15px;
`;
const ButtonDelete = styled(Button)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${baseTheme.colors.hunterGreen};
  color: ${baseTheme.colors.white};
`;
const ButtonCount = styled(ButtonDelete)`
  margin: 0 10px;
  background: transparent;
  color: ${baseTheme.colors.black};
  border: 1px solid ${baseTheme.colors.black};
`;

export const UserPlants = ({
  plant,
  openSelectedPlant,
}: {
  plant: IPlant;
  openSelectedPlant: any;
}) => {
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  const calculateCurrentPrise = () => {
    dispatch(editPlant({ id: plant.id, count: count }));
  };

  useEffect(() => {
    calculateCurrentPrise();
  }, [count]);

  const deleteItem = (id: string) => {
    dispatch(deletePlant(id));
  };

  const removePlant = (event: any): void => {
    event.stopPropagation();
    deleteItem(plant.id);
  };

  return (
    <Wrap>
      <div>
        <ButtonCount onClick={() => setCount(count - 1)} disabled={count < 2}>
          -
        </ButtonCount>
        {count}
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
      <Name onClick={openSelectedPlant}>{plant.name}</Name>
      <p>{plant.price * plant.count}$</p>
      <ButtonDelete onClick={removePlant}>x</ButtonDelete>
    </Wrap>
  );
};
