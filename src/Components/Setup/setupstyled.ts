import styled from "styled-components";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import { motion } from "framer-motion";
import { slideIn } from "../signup/signupstyled";

export const AccountSetUpContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${slideIn} 0.35s;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 72vh;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const AccountSubContainer = styled.div`
  width: 90%;
  margin: auto;
  flex-grow: 1;
  padding-top: 60px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
`;

export const AccountSetUpHeading = styled.h1`
  ${interMedium}
  font-size: 32px;
  text-align: center;
`;

export const AccountSideHeading = styled.p`
  ${interMedium}
  font-size: 16px;
  text-align: left;
`;

export const AccountSetUpContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const LetsGo = styled(GlobalButton1)`
  width: 100%;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 4%;
  }
`;

export const TextContainer = styled.div`
  display: inline-flex;
  padding: 8px;
  align-items: center;
  gap: 15px;
  width: 90%;
  border-radius: 8px;
  border: 0.2px solid #000;
`;

export const TextImage = styled.img`
  height: 24px;
  width: 24px;
`;

export const Text = styled.p`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-25, #292b2d);
  font-size: 12px;
  line-height: 18px; /* 150% */
  text-align: left;
`;
