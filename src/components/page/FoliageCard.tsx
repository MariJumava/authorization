import styled from 'styled-components';
import { baseTheme } from '../../styles/baseTheme';

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
const Button = styled.button`
  height: 20px;
  background: ${baseTheme.colors.grannySmithApple};
  color: ${baseTheme.colors.black};
  border-radius: 10px;
  border: none;
`;

export const FoliageCard = ({ plant }) => {
  return (
    <Wrap>
      <Name>{plant.name}</Name>
      <Button>+</Button>
    </Wrap>
  );
};
