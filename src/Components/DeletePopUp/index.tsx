import React, { useState } from "react";
import {
  PopUpSubContainer,
  PopupContainer,
} from "../Transaction/styledComponents";
import {
  DeletePopUpHeading,
  DeletePopUpSubHeading,
  DeleteButtonsContainer,
  NoButton,
  YesButton,
} from "./styledcomponents";
import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { handleAxiosError } from "../../Constants/errorHandler";
import NotFound from "../NotFound";

interface DeletePopUpProps {
  closePopUp: () => void;
  openSuccessPopUp: () => void;
  transactionId: string | number;
}

const popupVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100%" },
};

const DeletePopUp: React.FC<DeletePopUpProps> = ({
  closePopUp,
  openSuccessPopUp,
  transactionId,
}) => {
  const { accessToken } = ChangingTokens();
  const [notFound, setIsNotFound] = useState(false);

  const { navigateToHome } = NavigationEvents();

  const noClick = () => {
    closePopUp();
  };

  const yesClick = () => {
    const fetching = async () => {
      try {
        const response = await axios.post(
          `${url}/delete_user_expense/`,
          {
            expense_id: transactionId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );

        closePopUp();
        openSuccessPopUp();
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          setIsNotFound(true);
        }
      }
    };
    fetching();
  };

  if (notFound) {
    return <NotFound />;
  }

  return (
    <PopupContainer
      onClick={(e) => e.stopPropagation()}
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PopUpSubContainer>
        <DeletePopUpHeading>Remove this transaction?</DeletePopUpHeading>
        <DeletePopUpSubHeading>
          Are you sure do you wanna remove this transaction?
        </DeletePopUpSubHeading>
        <DeleteButtonsContainer>
          <NoButton onClick={noClick}>No</NoButton>
          <YesButton onClick={yesClick}>Yes</YesButton>
        </DeleteButtonsContainer>
      </PopUpSubContainer>
    </PopupContainer>
  );
};

export default DeletePopUp;
