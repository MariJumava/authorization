import styled from 'styled-components';
import { useAppDispatch } from 'hooks/redux';
import { baseTheme } from '../../../../styles/baseTheme';
import { addPlant } from 'redux/user/UserReducer';
import { IPlant } from 'components/Plants';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled.h6`
  margin: 15px 0;
  font-size: ${baseTheme.fontSize.list}px;
  color: ${baseTheme.colors.subtitle};
`;
export const Button = styled.button`
  height: 20px;
  background: ${baseTheme.colors.grannySmithApple};
  color: ${baseTheme.colors.black};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const FoliageCard = ({
  plant,
  isShowButton,
}: {
  plant: IPlant;
  isShowButton: boolean;
}) => {
  const dispatch = useAppDispatch();

  const clonePlant = (): void => {
    dispatch(addPlant(plant));
  };

  return (
    <Wrap>
      <Name>{plant.name}</Name>
      {isShowButton && <Button onClick={clonePlant}>+</Button>}
    </Wrap>
  );
};
