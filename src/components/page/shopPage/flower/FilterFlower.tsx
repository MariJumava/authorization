import styled from 'styled-components';
import { baseTheme } from 'styles/baseTheme';
import { SubTitle } from 'styles/title';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: fit-content;
  margin-left: 100px;
  margin-top: 160px;
  padding: 20px;
  background: ${baseTheme.colors.MSUGreen};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(SubTitle)`
  width: auto;
  margin: 20px 0;
  color: ${baseTheme.colors.white};
`;
const ClearForm = styled.div`
  font-size: ${baseTheme.fontSize.list}px;
  cursor: pointer;
  color: ${baseTheme.colors.grannySmithApple};
`;
const InputSearch = styled.input`
  width: 210px;
  padding: 5px;
  border: none;
  border-radius: 5px;
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const StyledSelect = styled.select`
  padding: 10px;
  box-sizing: border-box;
  font-size: ${baseTheme.fontSize.list}px;
  color: ${baseTheme.colors.MSUGreen};
  border: none;
  border-radius: 5px;
`;
const WrapCheckbox = styled.span`
  padding-bottom: 10px;
`;
const Text = styled.span`
  font-size: ${baseTheme.fontSize.subtitleImg}px;
  color: ${baseTheme.colors.white};
`;

export const FilterFlower = ({
  handleChange,
  setSearch,
  setSortCategory,
  setSortType,
  sortCategory,
}) => {
  const clearForm = () => {
    setSearch('');
    setSortCategory([]);
    setSortType('all');
  };

  return (
    <Wrap>
      <Container>
        <Title>Filter</Title>
        <ClearForm onClick={clearForm}>clear all</ClearForm>
      </Container>
      <InputSearch
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
      />
      <Title>Sort by</Title>
      <StyledSelect
        onChange={(event) => {
          setSortType(event.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="popularity">Popularity</option>
        <option value="name">By name</option>
      </StyledSelect>
      <Checkbox>
        <WrapCheckbox>
          <input
            type="checkbox"
            name="Fruit"
            checked={sortCategory.includes('Fruit')}
            onChange={(event) => {
              setSortCategory(event.target.name);
            }}
          />
          &nbsp;<Text>Berries</Text>
        </WrapCheckbox>
        <WrapCheckbox>
          <input
            type="checkbox"
            name="Foliage"
            checked={sortCategory.includes('Foliage')}
            onChange={(event) => {
              setSortCategory(event.target.name);
            }}
          />
          &nbsp;<Text>Vegitables</Text>
        </WrapCheckbox>
        <WrapCheckbox>
          <input
            type="checkbox"
            name="Flower"
            checked={sortCategory.includes('Flower')}
            onChange={(event) => {
              setSortCategory(event.target.name);
            }}
          />
          &nbsp;<Text>Flower</Text>
        </WrapCheckbox>
      </Checkbox>
    </Wrap>
  );
};
