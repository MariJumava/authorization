import { IPlant } from 'components/Plants';
import { Name, Wrap } from './UserPlants';

export const FooterUserPlants = ({
  totalPlant,
}: {
  totalPlant: Partial<IPlant>;
}) => {
  const { count, price } = totalPlant;
  return (
    <Wrap>
      <Name>{count} items</Name>
      <Name>To pay:</Name>
      <Name>{price} $</Name>
    </Wrap>
  );
};
