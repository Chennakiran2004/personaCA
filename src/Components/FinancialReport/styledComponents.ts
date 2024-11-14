import styled from "styled-components";
import { HeaderContainer, SignUpHeading } from "../signup/signupstyled";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";

export const FinancialReportMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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

export const FinancialReportContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 8%;
  align-items: center;
  gap: 16px;
`;

export const FinancialReportHeaderContainer = styled(HeaderContainer)`
  width: 100%;
`;

export const FinancialReportHeading = styled(SignUpHeading)`
  ${interSemiBold}
`;

export const DoughunChartContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const MonthDropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const MonthDropDown = styled.div`
  display: flex;
  padding: 8px 16px 8px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 40px;
  text-align: center;
  border: 1px solid var(--Base-Light-Light-60, #f1f1fa);
`;

export const ArrowDown = styled.img``;

export const DropDownText = styled.p`
  color: var(--Base-Dark-Dark-50, #212325);
  text-align: center;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const IncomeAndExpenseTabs = styled.div`
  width: 100%;
  border-radius: 32px;
  background: var(--Base-Light-Light-60, #f1f1fa);
  display: flex;
  padding: 4px;
`;

export const ExpenseButton = styled.button`
  color: var(--Base-Light-Light-80, #fcfcfc);

  background: var(--Violet-Violet-100, #7f3dff);
  /* Body/Body 1 */
`;

export const ExpenseAndIncomeButton = styled.button`
  ${interMedium}
  font-size: 16px;
  line-height: normal;
  border-radius: 32px;
  width: 50%;
  height: 56px;
  flex-shrink: 0;
  border: none;
`;

export const ExpensesBarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
  margin-top: 8%;
  height: auto;
  scrollbar-width: none;
  overflow: scroll;
  @media screen and (min-width: 768px) {
    height: 23dvh;
  }
`;
