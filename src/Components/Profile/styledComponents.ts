import styled from "styled-components";
import {
  interBold,
  interMedium,
  interSemiBold,
} from "../../Constants/fontStyles";
import { motion } from "framer-motion";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

export const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91dvh;
  /* background-color: #f6f6f6; */
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    overflow-y: scroll;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 72vh;
    scrollbar-width: none;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 8%;
  align-items: center;
`;

export const ProfileHeadingContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  gap: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileHeadingIcon = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: var(--Violet-Violet-100, #7f3dff);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileHeadingIconSymbol = styled.p`
  ${interBold}
  color: var(--Base-Light-Light-80, #fcfcfc);
  font-size: 36px;
`;

export const ProfileHeadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const UserNameText = styled.p`
  ${interMedium}
  color: var(--Base-Light-Light-20, #91919f);
  font-size: 14px;
  line-height: normal;
`;

export const UserName = styled.p`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-75, #161719);
  font-size: 24px;
  line-height: normal;
  text-align: center;
`;

export const ProfileInfoItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  /* background-color: #f6f6f6; */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Updated shadow */
  margin: 8% 0;
`;

export const ProfileInfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8%;
  padding: 16px;
`;

export const ProfileItemImage = styled.img``;

export const ProfileItemText = styled.p`
  ${interMedium}
  color: var(--Base-Dark-Dark-25, #292b2d);
  font-size: 16px;
  line-height: normal;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  opacity: 0.2;
`;

export const LogoutHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const LogoutHeading = styled.p`
  color: #000;
  text-align: center;

  /* Title / Title 3 */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LogoutDescription = styled.p`
  color: var(--Base-Light-Light-20, #91919f);
  text-align: center;

  /* Body/Body 1 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LogoutButtonsContaienr = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Button = styled.button`
  ${interSemiBold}
  display: flex;
  width: 45%;
  height: 56px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: normal;
  border: none;
  border-radius: 16px;
`;

export const NoButton = styled(Button)`
  color: var(--Violet-Violet-100, #7f3dff);
  background: #eee5ff;
`;

export const YesButton = styled(Button)`
  background: var(--Violet-Violet-100, #7f3dff);
  color: var(--Base-Light-Light-80, #fcfcfc);
`;

export const FeedbackPopupContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 24px;
  padding-top: 24px;
  width: 500px;
  height: auto;
  margin: auto;
  position: relative;
  border-radius: 24px;
  background: white;

  @media screen and (max-width: 768px) {
    top: 30%;
    width: 88%;
  }
`;

export const FeedbackHeadingContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const FeedbackTextMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeedbackTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const FeedbackText = styled.p`
  ${interSemiBold}
  color: var(--Base-Light-Light-20, #91919f);
  font-style: normal;
  line-height: normal;
  font-size: 12px;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const FeedbackDescription = styled(FeedbackText)`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DescriptionInput = styled.input`
  width: 90%;
  margin: auto;
  display: flex;
  height: 34px;
  padding: 4.082px 8.163px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5.102px;
  align-self: stretch;
  border-radius: 8.163px;
  border: 1px solid var(--Base-Light-Light-60, #f1f1fa);
  background: var(--Base-Light-Light-100, #fff);
`;

export const FalseImage = styled.img`
  align-self: flex-end;
  height: 18px;
  width: 18px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SubmitButton = styled(GlobalButton1)`
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  width: 30%;
`;

export const MaleIcon = styled.img`
  width: 90px;
  height: 90px;
`;
