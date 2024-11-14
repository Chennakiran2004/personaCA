import { CategoriesMap, NavigationEvents } from '../../Constants/EventHandlers';
import { ListItem, ListItemContentsContainer, PriceContainer, CategoryHeading, PriceHeading, DescriptionContainer, DescriptionHeading, TimeElement } from '../Transaction/styledComponents';
import { useNavigate } from 'react-router-dom';

interface DetailsInterface{
    category: string;
    amount: string;
    time: string;
    transaction_id: string;
    description: string;
  }

interface DetailsInterfaceProps{
    item: DetailsInterface
}

const TransactionItem: React.FC<DetailsInterfaceProps> = ({ item }) => {
  const navigate = useNavigate();

  const {navigateToTransactionDetails} = NavigationEvents()
  const imageUrl = CategoriesMap[item.category]

  return (
    <ListItem onClick = {()=> navigateToTransactionDetails(item.transaction_id)}>
      <img src={imageUrl} alt={item.category} />
      <ListItemContentsContainer>
        <PriceContainer>
          <CategoryHeading>{item.category}</CategoryHeading>
          <PriceHeading>-₹{item.amount}</PriceHeading>
        </PriceContainer>
        <DescriptionContainer>
          <DescriptionHeading>{item.description}</DescriptionHeading>
          <TimeElement>{item.time}</TimeElement>
        </DescriptionContainer>
      </ListItemContentsContainer>
    </ListItem>
  );
};

export default TransactionItem;
