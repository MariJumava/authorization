import styled from 'styled-components';
import { baseTheme } from '../../../styles/baseTheme';

const Name = styled.div`
  margin: 5px 20px;
  font-size: ${baseTheme.fontSize.list}px;
  color: ${baseTheme.colors.subtitle};
`;

export const UserPlants = ({ plant }) => {
  return (
    <>
      <Name>{plant.name}</Name>
    </>
  );
};
