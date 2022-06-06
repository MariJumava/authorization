import { Name, Wrap } from './UserPlants';

export const FooterUserPlants = ({ totalPlant }) => {
  const { count, price } = totalPlant;
  return (
    <Wrap>
      <Name>{count} items</Name>
      <Name>To pay:</Name>
      <Name>{price} $</Name>
    </Wrap>
  );
};
