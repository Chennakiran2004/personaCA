import styled from "styled-components";
import {
  GenderContents,
  HeaderContainer,
  IconContianer,
  SignUpHeading,
  slideIn,
} from "../signup/signupstyled";
import { interRegular, interSemiBold } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

export const AddNewAccountMainContainer = styled.div`
  background: var(--Violet-Violet-100, #7f3dff);
  width: 100%;
  background-size: cover;
  height: 90vh;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 72vh;
    position: relative;
  }

  /* General MacBook Media Query */
  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

// export const AddNewAccountSubContainer = styled.div`
//   width: 96%;
//   margin: auto;
// `;

export const AddNewAccountHeadingContainer = styled(HeaderContainer)`
  padding-top: 8%;
  padding-bottom: 8%;
`;

export const AddNewAccountHeading = styled(SignUpHeading)`
  color: var(--Base-Light-Light-100, #fff);
`;

export const AddNewAccountIconContainer = styled(IconContianer)`
  color: var(--Base-Light-Light-100, #fff);
`;

export const AccountDetailsContainer = styled.div`
  border-radius: 32px 32px 16px 16px;
  background: #fff;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;

export const AccountDetailsSubContainer = styled.div`
  width: 96%;
  margin: auto;
`;

export const EnterYourSalaryContainer = styled.div`
  display: flex;
  width: 90%;
  padding-right: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin: auto;
  padding: 16px;
`;

export const EnterYourSalaryHeading = styled.h2`
  color: #a4a4a4;
  ${interSemiBold}

  font-size: 18px;
  line-height: normal;
  opacity: 0.64;
`;

export const EnterYourSalaryInput = styled.input`
  ${interSemiBold}
  color: #272626;
  font-size: 40px;
  line-height: normal;
  width: 100%;
  border: none;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & {
    -moz-appearance: textfield; /* Remove spin buttons in Firefox */
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 12px;
  gap: 12px;
`;

export const RupeesAndInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RupeesSymbol = styled.p`
  ${interSemiBold}
  color: #272626;
  font-size: 40px;
`;

export const CityLocation = styled.div`
  ${interRegular}
  display: flex;
  height: 32px;
  padding: 8px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid var(--Base-Light-Light-60, #f1f1fa);
  background: var(--Base-Light-Light-100, #fff);
  color: var(--Base-Light-Light-20, #91919f);
  font-size: 16px;
  line-height: 18px; /* 112.5% */
`;

// export const LocationDropDownItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   align-self: stretch;
//   width: 90%;
//   margin: auto;
// `;

export const LocationDropDownItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--Violet-Violet-100, #7f3dff)" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  border-radius: 4px;

  &:hover {
    background-color: var(--Violet-Violet-100, #7f3dff);
    color: #fff;
  }
`;

export const LocationDropDownItemText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const LocationDropDownItemImage = styled.img`
  /* stroke-width: 1px;
  stroke: #909090;
  width: 9.899px;
  height: 0px;
  transform: rotate(-135deg); */
`;

export const LocationContents = styled(GenderContents)`
  height: 20vh;
  overflow: scroll;
`;

export const ContinueButton = styled(GlobalButton1)`
  width: 90%;
  margin: auto;
  margin-top: 16px;
`;

export const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 95%;
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--Violet-Violet-100, #7f3dff)" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  border: 1px solid #afafaf;
  margin: auto;
  padding: 14px;
  border-radius: 8px;
  &:hover {
    background-color: var(--Violet-Violet-100, #7f3dff);
    color: #fff;
  }
`;
