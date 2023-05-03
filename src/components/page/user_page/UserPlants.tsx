import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'redux/redux';
import { deletePlant, editPlant } from 'redux/user/UserReducer';
import { baseTheme } from '../../../styles/baseTheme';
import { device } from '../../../styles/device';
import { Button } from '../shopPage/foliage/FoliageCard';
import { IPlant } from 'components/Plants';

export const Name = styled.div`
  margin: 5px 20px;
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.black};
  cursor: pointer;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 20px 40px;
  padding: 0 30px;
  background: ${baseTheme.colors.subtitle};
  border: none;
  border-radius: 15px;
  @media ${device.tablet} {
    margin: 20px 0;
    padding: 0;
  }
`;
const Count = styled.div`
  display: flex;
  align-items: center;
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
  openSelectedPlant: MouseEventHandler<HTMLDivElement>;
}) => {
  const [count, setCount] = useState<number>(plant.count);

  const dispatch = useAppDispatch();

  const calculateCurrentPrise = useCallback(
    (count: number) => {
      dispatch(editPlant({ id: plant.id, count: count }));
    },
    [dispatch, plant.id]
  );

  useEffect(() => {
    calculateCurrentPrise(count);
  }, [calculateCurrentPrise, count]);

  const deleteItem = (id: string) => {
    dispatch(deletePlant(id));
  };

  const removePlant = (event: any): void => {
    event.stopPropagation();
    deleteItem(plant.id);
  };

  return (
    <Wrap>
      <Count>
        <ButtonCount onClick={() => setCount(count - 1)} disabled={count < 2}>
          -
        </ButtonCount>
        {count}
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </Count>
      <Name onClick={openSelectedPlant}>{plant.name}</Name>
      <p>{plant.price * plant.count}$</p>
      <ButtonDelete onClick={removePlant}>x</ButtonDelete>
    </Wrap>
  );
};
