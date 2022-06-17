import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'hooks/redux';
import { addPlant } from 'redux/user/UserReducer';
import { baseTheme } from 'styles/baseTheme';
import { device } from '../../../../styles/device';
import { IPlant } from 'components/Plants';
import { ButtonSecondary } from 'styles/buttons';

const Wrap = styled.div`
  width: 300px;
  padding: 35px 15px;
  margin-bottom: 24px;
  margin-left: 20px;
  text-align: center;
  background: ${baseTheme.colors.MSUGreen};
  border-radius: 12px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 10px;
  @media ${device.tablet} {
  }
`;
const Img = styled.img`
  width: 260px;
  border-radius: 10px;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: ${baseTheme.fontSize.subtitle}px;
  font-weight: ${baseTheme.fontWeight.weight};
  color: ${baseTheme.colors.white};
`;
const Button = styled(ButtonSecondary)`
  width: 150px;
  height: 50px;
  margin: 0;
  font-size: ${baseTheme.fontSize.list}px;
  background: ${baseTheme.colors.grannySmithApple};
  color: ${baseTheme.colors.black};
`;

export const FlowerCard = ({
  plant,
  isShowButton,
  openSelectedPlant,
}: {
  plant: IPlant;
  isShowButton: boolean;
  openSelectedPlant: MouseEventHandler<HTMLDivElement>;
}) => {
  const dispatch = useAppDispatch();

  const clonePlant = (event: any) => {
    event.stopPropagation();
    dispatch(addPlant(plant));
  };

  return (
    <Wrap onClick={openSelectedPlant}>
      <Img src={plant.img} />
      <Title>{plant.name}</Title>
      {isShowButton && <Button onClick={clonePlant}>Add to Basket</Button>}
    </Wrap>
  );
};
