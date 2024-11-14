import styled from "styled-components";
import { interSemiBold } from "../../Constants/fontStyles";
import {
  GenderButton,
  GenderContents,
  HeaderContainer,
  IconContianer,
  InputField,
  ParaElement,
} from "../signup/signupstyled";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import {
  EnterYourSalaryInput,
  RupeesSymbol,
} from "../AddNewAccount/styledComponents";

export const ExpenseContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #fd3c4a;
  padding-top: 8%;
  background-size: cover;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 72vh;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const ExpenseSubContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ExpenseHeader = styled.div`
  position: realative;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const ExpenseHeading = styled.p`
  width: 100%;
  text-align: center;
  color: #ffffff;
  ${interSemiBold}
  font-size: 20px;
`;

export const BackIconContainer = styled(IconContianer)`
  color: white;
`;

export const ExpenseBottomContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 32px 32px 0px 0px;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 8%;
  transition: height 5s ease;
  padding-bottom: 8%;
`;

export const CategoryContents = styled(GenderContents)`
  max-height: 300px;
  width: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const DescriptionField = styled(InputField)`
  width: 90%;
`;

export const ExpenseBottomSubContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContinueButton = styled(GlobalButton1)`
  width: 92%;
  margin: auto;
  margin-top: 16px;
`;

interface CategoryButton {
  isSelected: boolean;
}

export const CategoryButton = styled(GenderButton)<CategoryButton>`
  background-color: ${({ isSelected }) => (isSelected ? "#7F3DFF" : "none")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: ${({ isSelected }) => (isSelected ? "none" : "1px solid #afafaf")};
  transition: background-color 0.2s ease, color 0.2s ease;
`;
interface CategoryParaElement {
  category: string;
}

export const CategoryParaElement = styled(ParaElement)<CategoryParaElement>`
  color: ${({ category }) => (category !== "Category" ? "black" : "#91919f")};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const InputHeading = styled.p`
  color: #fcfcfc;
  opacity: 0.5;
  font-size: 20px;
  ${interSemiBold}
`;

export const InputExpense = styled.input`
  text-align: left;
  border: none;
  outline: none;
  background: none;
  font-size: 36px;
  max-width: 95%;

  ${interSemiBold};
  color: white;

  &::placeholder {
    color: white;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & {
    -moz-appearance: textfield; /* Remove spin buttons in Firefox */
  }
`;

export const RupeesSymbolExpense = styled(RupeesSymbol)`
  color: white;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin: auto;
  color: #fd3c4a;
`;
