import styled from 'styled-components';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { device } from '../../../../styles/device';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const Wrap = styled.div`
  position: relative;
`;
const Clear = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
`;
const StyledInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  @media ${device.tablet} {
    width: auto;
  }
`;

export const SearchPlant = ({
  handleChange,
  setSearch,
}: {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const clearForm = (): void => {
    setSearch('');
  };
  return (
    <Wrap>
      <StyledInput
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
      />
      <Clear>
        <BackspaceIcon onClick={clearForm} />
      </Clear>
    </Wrap>
  );
};
