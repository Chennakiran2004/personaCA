import {
  DescriptionInput,
  FeedbackHeadingContainer,
  FeedbackPopupContainer,
  FeedbackText,
  FeedbackTextContainer,
  FeedbackTextMainContainer,
  HorizontalLine,
  LogoutButtonsContaienr,
  LogoutDescription,
  LogoutHeading,
  LogoutHeadingContainer,
  NoButton,
  ProfileContentContainer,
  ProfileHeadingContainer,
  ProfileHeadingIcon,
  ProfileHeadingIconSymbol,
  ProfileHeadingTextContainer,
  ProfileInfoItemContainer,
  ProfileInfoItemsContainer,
  ProfileItemImage,
  ProfileItemText,
  ProfileMainContainer,
  UserName,
  UserNameText,
  YesButton,
  FalseImage,
  SubmitButtonContainer,
  SubmitButton,
  FeedbackDescription,
  MaleIcon,
} from "./styledComponents";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  Overlay,
  PopupContainer,
  PopUpSubContainer,
} from "../Transaction/styledComponents";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import { handleAxiosError } from "../../Constants/errorHandler";
import StarRating from "../StarRating";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";
import NotFound from "../NotFound";

// Loader component
const LoaderSpinner: React.FC = () => (
  <ProfileMainContainer style={{ justifyContent: "center" }}>
    <Oval
      height={40}
      width={40}
      color="#7f3dff"
      visible={true}
      ariaLabel="loading"
    />
  </ProfileMainContainer>
);

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
  text-align: left;
`;

const popupVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100%" },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ProfileInterface {
  email: string;
  full_name: string;
  gender: string;
  role: string;
  salary: string;
  username: string;
}

const Profile = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [errorDescription, setErrorDescription] = useState("");
  const [errorRating, setErrorRating] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [userData, setUserData] = useState<ProfileInterface | null>();
  const [notFound, setNotFound] = useState(false);

  const { navigateToUserInfo, navigateToLogin, navigateToMonthReview } =
    NavigationEvents();
  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();

  const handleLogoutClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopUpOpen(false);
    setIsFeedbackOpen(false);
    setErrorDescription("");
    setErrorRating("");
    setRating(0);
  };

  const handleFeedbackClick = () => {
    setIsFeedbackOpen(true);
  };

  const handleLogout = async () => {
    setLoading(true);
    const data = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    try {
      await axios.post(`${url}/user_account/logout/v1`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      deleteAccessToken();
      deleteRefereshToken();
      navigateToLogin();
    } catch (err: any) {
      handleAxiosError(err);
      if (err.response && err.response.status === 404) {
        setNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/get/user_profile/v1`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [accessToken]);

  if (notFound) {
    return <NotFound />;
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    if (event.target.value) {
      setErrorDescription("");
    }
  };

  const submitFeedback = () => {
    if (!description) setErrorDescription("Description cannot be empty");
    if (!rating) setErrorRating("Please provide a rating");

    if (description && rating) {
      const fetching = async () => {
        setLoading(true);
        try {
          await axios.post(
            `${url}/feedback/`,
            { description: description, rating: rating },
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );

          setDescription("");
          setRating(0);
        } catch (err: any) {
          handleAxiosError(err);
          if (err.response && err.response.status === 404) {
            return <NotFound />;
          }
        } finally {
          setLoading(false);
          handleClosePopup();
        }
      };
      fetching();
    }
  };

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <ProfileMainContainer>
          <ProfileContentContainer>
            <ProfileHeadingContainer>
                  {userData?.gender === "MALE" ? <MaleIcon src = "/Images/man-avatar.svg"/>: <MaleIcon src = "/Images/female-avatar.svg"/>}
             
              <ProfileHeadingTextContainer>
                <UserName>{userData?.username}</UserName>
              </ProfileHeadingTextContainer>
            </ProfileHeadingContainer>
            {/* Rest of Profile component with feedback and logout popups */}
            <ProfileInfoItemsContainer>
              <ProfileInfoItemContainer onClick={navigateToUserInfo}>
                <ProfileItemImage
                  src="/Images/userinfo.svg"
                  alt="userinfo pic"
                />
                <ProfileItemText>Edit Profile</ProfileItemText>
              </ProfileInfoItemContainer>
              <HorizontalLine />
              <ProfileInfoItemContainer onClick={navigateToMonthReview}>
                <ProfileItemImage
                  src="/Images/monthlyreviewicon.svg"
                  alt="userinfo pic"
                />
                <ProfileItemText>Monthly Report</ProfileItemText>
              </ProfileInfoItemContainer>
              <HorizontalLine />
              <ProfileInfoItemContainer onClick={handleFeedbackClick}>
                <ProfileItemImage
                  src="/Images/feedback.svg"
                  alt="userinfo pic"
                />
                <ProfileItemText>Feedback</ProfileItemText>
              </ProfileInfoItemContainer>
              <HorizontalLine />
              <ProfileInfoItemContainer onClick={handleLogoutClick}>
                <ProfileItemImage src="/Images/logout.svg" alt="logout pic" />
                <ProfileItemText>Logout</ProfileItemText>
              </ProfileInfoItemContainer>
            </ProfileInfoItemsContainer>

            <AnimatePresence mode="wait">
              {isFeedbackOpen && (
                <Overlay
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={handleClosePopup}
                >
                  <FeedbackPopupContainer
                    onClick={(e) => e.stopPropagation()}
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <PopUpSubContainer>
                      <FalseImage
                        onClick={handleClosePopup}
                        src="/Images/false 1.svg"
                      />
                      <FeedbackHeadingContainer>
                        <FeedbackTextMainContainer>
                          <FeedbackTextContainer>
                            <FeedbackText>
                              Hi {userData?.username}!
                            </FeedbackText>
                            <FeedbackDescription>
                              How is the experience to use this product?
                            </FeedbackDescription>
                          </FeedbackTextContainer>
                          <ProfileItemImage
                            src="/gifs/Bird Say Hi (1).gif"
                            alt="userinfo pic"
                            style={{
                              width: "70px",
                              height: "70px",
                            }}
                          />
                        </FeedbackTextMainContainer>
                      </FeedbackHeadingContainer>
                      <StarRating
                        rating={rating}
                        setRating={(newRating) => {
                          setRating(newRating);
                          setErrorRating("");
                        }}
                      />
                      {errorRating && (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            textAlign: "left",
                            paddingLeft: "6%",
                            paddingTop: "1%",
                          }}
                        >
                          {errorRating}
                        </p>
                      )}
                      <DescriptionInput
                        type="text"
                        placeholder="Description"
                        onChange={handleDescriptionChange}
                      />
                      {errorDescription && (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            textAlign: "left",
                            paddingLeft: "6%",
                          }}
                        >
                          {errorDescription}
                        </p>
                      )}
                      <SubmitButtonContainer>
                        <SubmitButton onClick={submitFeedback}>
                          Submit
                        </SubmitButton>
                      </SubmitButtonContainer>
                    </PopUpSubContainer>
                  </FeedbackPopupContainer>
                </Overlay>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {isPopupOpen && (
                <Overlay
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={handleClosePopup}
                >
                  <PopupContainer
                    onClick={(e) => e.stopPropagation()}
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <PopUpSubContainer>
                      <LogoutHeadingContainer>
                        <LogoutHeading>Logout?</LogoutHeading>
                        <LogoutDescription>
                          Are you sure do you wanna logout?
                        </LogoutDescription>
                      </LogoutHeadingContainer>
                      <LogoutButtonsContaienr>
                        <NoButton onClick={handleClosePopup}>No</NoButton>
                        <YesButton onClick={handleLogout}>Yes</YesButton>
                      </LogoutButtonsContaienr>
                    </PopUpSubContainer>
                  </PopupContainer>
                </Overlay>
              )}
            </AnimatePresence>
          </ProfileContentContainer>
        </ProfileMainContainer>
      )}
    </>
  );
};

export default Profile;
