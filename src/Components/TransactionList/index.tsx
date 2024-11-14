import {
  DateHeading,
  TransactionListContainer,
} from "../Transaction/styledComponents";
import TransactionItem from "../TransactionItem";

interface TransactionListProps {
  date: string;
  details: DetailsInterface[];
}

interface DetailsInterface {
  category: string;
  amount: string;
  time: string;
  transaction_id: string;
  description: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ date, details }) => {
  return (
    <>
      <DateHeading>{date}</DateHeading>
      <TransactionListContainer>
        {details.map((item, index) => (
          <TransactionItem key={index} item={item} />
        ))}
      </TransactionListContainer>
    </>
  );
};

export default TransactionList;
