//import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { baseTheme } from '../../styles/baseTheme';
import { addPlant } from 'redux/user/UserReducer';

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
`;

export const FoliageCard = ({ plant }: any) => {
  //const myPlants = useAppSelector((state) => state.user.user.myplants);
  //const [showButtonClone, setShowButtonClone] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (myPlants?.findIndex((x) => x.id === selectPlant.id) < 0) {
  //     setShowButtonClone(false);
  //   } else {
  //     setShowButtonClone(true);
  //   }
  // }, [selectPlant, myPlants]);

  const clonePlant = () => {
    console.log(plant);
    dispatch(addPlant(plant));
  };

  return (
    <Wrap>
      <Name>{plant.name}</Name>
      {/* {showButtonClone ? */}
      <Button onClick={clonePlant}>+</Button>
      {/* : null} */}
    </Wrap>
  );
};
