import styled from 'styled-components';
import { useState, useMemo } from 'react';
import { useAppSelector } from 'hooks/redux';
import { FilterFlower } from './FilterFlower';
import { FlowerCard } from './FlowerCard';
// import { IPlant } from 'components/Plants';
import { baseTheme } from 'styles/baseTheme';
import flower_page from '../../../../pictures/shop_page/flower_page.jpg';
import { OpenModalFlower } from './OpenModalFlower';
import { TablePagination } from '@mui/material';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(${flower_page});
  background-size: contain;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 160px;
`;
const Pagination = styled.div`
  margin-bottom: 30px;
  background: ${baseTheme.colors.grannySmithApple};
`;

export const FlowerPage = () => {
  const plants = useAppSelector((state) => state.user.plants);
  const userPlants = useAppSelector((state) => state.user.user.myplants);
  const [showOpenModal, setShowOpenModal] = useState<boolean>(false);
  const [selectedPlantId, setSelectedPlantId] = useState<any>(null);
  const [search, setSearch] = useState<string>('');
  const [sortCategory, setSortCategory] = useState<any>([]);
  const [sortType, setSortType] = useState<any>('all');

  const [currentPage, setCurrentPage] = useState<number>(2);
  const [rowsPerPage, setRowsPerPage] = useState<number>(6);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  const searchPlant = plants
    .filter((plant) => {
      return plant.name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((plantA, plantB): any => {
      if (sortType === 'popularity') {
        return plantB.popularity - plantA.popularity;
      }
      if (sortType === 'name') {
        return plantA.name > plantB.name ? 1 : -1;
      }
      return plantA;
    })
    .filter((plant) => {
      return sortCategory?.length
        ? sortCategory.includes(plant.category)
        : plant;
    })
    .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const isShowButton = (id: string) => () => {
    return !userPlants?.find((item) => item.id === id);
  };
  const selectedPlant = useMemo(
    () => plants?.find((el) => el.id === selectedPlantId),
    [selectedPlantId, plants]
  );

  const openSelectedPlant = (plantId): any => {
    setShowOpenModal(true);
    setSelectedPlantId(plantId);
  };

  const closeModalPlant = () => {
    setShowOpenModal(false);
  };

  return (
    <Wrap>
      <FilterFlower
        handleChange={handleChange}
        setSearch={setSearch}
        sortCategory={sortCategory}
        setSortCategory={setSortCategory}
        setSortType={setSortType}
      />
      <Container>
        {showOpenModal ? (
          <OpenModalFlower
            selectedPlant={selectedPlant}
            closeModalPlant={closeModalPlant}
          />
        ) : null}
        <WrapCards>
          {searchPlant?.map((plant) => {
            return (
              <FlowerCard
                key={plant.id}
                plant={plant}
                isShowButton={isShowButton(plant.id)()}
                openSelectedPlant={() => openSelectedPlant(plant.id)}
              />
            );
          })}
        </WrapCards>
        <Pagination>
          <TablePagination
            rowsPerPageOptions={[6, 10, 25, 50, 100]}
            component="div"
            count={plants.length}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Pagination>
      </Container>
    </Wrap>
  );
};
