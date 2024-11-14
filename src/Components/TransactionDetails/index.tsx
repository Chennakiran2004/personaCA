import { useEffect, useState } from "react";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import DeletePopUp from "../DeletePopUp";
import { BackIconContainer, ExpenseHeading } from "../Expense/styledComponents";
import {
  DetailsContainer,
  DetailsSubContainer,
  DetailsTopContainer,
  TransactionDetailsHeader,
  DeleteIcon,
  TransactionContentsContainer,
  TransactionAmount,
  SalaryMonth,
  DateTimeDetails,
  TransactionContentsDetails,
  DateTime,
  DetailBottomContainer,
  TypeDetailsContainer,
  DetailBottomSubContainer,
  IncomeType,
  IncomeElement,
} from "./styledComponents";
import { Loader, Overlay } from "../Transaction/styledComponents";
import { AnimatePresence } from "framer-motion";
import DeleteSuccessPopUp from "../DeleteSuccessFullPopUp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { handleAxiosError } from "../../Constants/errorHandler";
import { Oval } from "react-loader-spinner"; // Import loader
import NotFound from "../NotFound";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface TransactionInterface {
  amount: string;
  category: string;
  date: string; // Assuming date is a string in 'YYYY-MM-DD' format
  time: string;
  transaction_id: number;
}

const TransactionDetails = () => {
  const { handleBack } = NavigationEvents();
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [successfulPopUp, setSuccessfulPopUp] = useState(false);
  const [data, setData] = useState<TransactionInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state for data fetching
  const [notFound, setNotFound] = useState(false);

  let { id } = useParams();
  const { accessToken } = ChangingTokens();

  const togglePopUp = () => {
    setDeletePopUp(!deletePopUp);
  };

  const openSuccessPopUp = () => {
    setSuccessfulPopUp(true);
  };

  const toggleSuccessPopUp = () => {
    handleBack();
    setSuccessfulPopUp(!successfulPopUp);
  };

  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.post(
          `${url}/get_transaction_details/`,
          {
            transaction_id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );

        setData(response.data);
        setIsLoading(false); // Stop loading once data is fetched
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          setNotFound(true);
        }
        setIsLoading(false); // Stop loading in case of error
      }
    };

    fetching();
  }, [id, accessToken]);

  // Format the date to get the weekday and month
  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: "long", weekday: "long" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return formattedDate;
  };

  if (notFound) {
    return <NotFound />;
  }

  return (
    <DetailsContainer>
      {isLoading ? (
        // Loader covering the entire card area
        <Loader>
          <Oval height={40} width={40} color="#7f3dff" visible={true} />
        </Loader>
      ) : (
        <DetailsSubContainer>
          <DetailsTopContainer>
            <TransactionDetailsHeader>
              <BackIconContainer onClick={handleBack} size={40} />
              <ExpenseHeading>Detail Transaction</ExpenseHeading>
              <DeleteIcon onClick={togglePopUp} src="/Images/deleteicon.svg" />
            </TransactionDetailsHeader>

            <TransactionContentsDetails>
              <TransactionContentsContainer>
                <TransactionAmount>₹{data?.amount}</TransactionAmount>
                <SalaryMonth>Money spent on {data?.category}</SalaryMonth> {/* Month */}
              </TransactionContentsContainer>
              <DateTimeDetails>
                <DateTime>{getFormattedDate(data?.date ?? '').split(' ')[0]}</DateTime> {/* Weekday */}
                <DateTime>{data?.date}</DateTime>
                <DateTime>{data?.time}</DateTime>
              </DateTimeDetails>
            </TransactionContentsDetails>
            <DetailBottomContainer>
              <DetailBottomSubContainer>
                <TypeDetailsContainer>
                  <IncomeType>Type</IncomeType>
                  <IncomeElement>Expense</IncomeElement>
                </TypeDetailsContainer>
                <TypeDetailsContainer>
                  <IncomeType>Category</IncomeType>
                  <IncomeElement>{data?.category}</IncomeElement>
                </TypeDetailsContainer>
                <TypeDetailsContainer>
                  <IncomeType>Wallet</IncomeType>
                  <IncomeElement>Chase</IncomeElement>
                </TypeDetailsContainer>
              </DetailBottomSubContainer>
            </DetailBottomContainer>
          </DetailsTopContainer>
        </DetailsSubContainer>
      )}

      {/* Delete Popup */}
      <AnimatePresence mode="wait">
        {deletePopUp && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={togglePopUp}
          >
            <DeletePopUp
              transactionId={id ?? ""}
              closePopUp={togglePopUp}
              openSuccessPopUp={openSuccessPopUp}
            />
          </Overlay>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence mode="wait">
        {successfulPopUp && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DeleteSuccessPopUp
              transactionId={id ?? ""}
              closePopUp={toggleSuccessPopUp}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </DetailsContainer>
  );
};

export default TransactionDetails;
