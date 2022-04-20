import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = () => {
  return (
    <Wrap>
      <CircularProgress color="secondary" />
    </Wrap>
  );
};
