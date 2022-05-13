import styled from 'styled-components';
import error from '../pictures/error.png';

const Wrap = styled.div`
  display: flex;
`;
const Error = styled.div`
  margin: auto;
`;
const Img = styled.img`
  width: 300px;
  margin: auto;
`;

export const NotFound = () => {
  return (
    <Wrap>
      <Error>
        <h1>404</h1>
        <h1>Page not found!</h1>
      </Error>
      <Img src={error} />
    </Wrap>
  );
};
