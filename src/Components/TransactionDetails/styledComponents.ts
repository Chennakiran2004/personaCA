import styled from "styled-components";
import { ExpenseHeader } from "../Expense/styledComponents";
import {
  interBold,
  interMedium,
  interSemiBold,
} from "../../Constants/fontStyles";

export const DetailsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f1f1fa;

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

export const DetailsSubContainer = styled.div`
  background-color: #f1f1fa;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DetailsTopContainer = styled.div`
  height: 300px;
  background-color: #00a86b;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    border-radius: 16px 16px 0px 0px;
  }
`;

export const TransactionDetailsHeader = styled(ExpenseHeader)`
  width: 90%;
  margin-top: 24px;
  margin-bottom: 0;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  right: 20px;
`;

export const TransactionContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const TransactionAmount = styled.h1`
  ${interBold}
  font-size: 48px;
  color: #fcfcfc;
`;

export const SalaryMonth = styled.p`
  ${interMedium}
  font-size: 20px;
  color: #fcfcfc;
`;
export const DateTimeDetails = styled.div`
  display: flex;
  gap: 16px;
`;

export const TransactionContentsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
`;

export const DateTime = styled.p`
  color: #fcfcfc;
  ${interMedium}
  font-size: 16px;
`;

export const DetailBottomContainer = styled.div`
  background-color: white;
  width: 90%;
  position: absolute;
  padding-top: 3%;
  padding-bottom: 3%;
  bottom: -25px;
  transform: translateX(-50%);
  left: 50%;
  border-radius: 12px;
`;

export const DetailBottomSubContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin: auto;
`;

export const IncomeType = styled.p`
  color: #91919f;
  ${interMedium}
`;

export const IncomeElement = styled.p`
  color: black;
  ${interSemiBold}
`;

export const TypeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
