import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";
import { DropDownText } from "../FinancialReport/styledComponents";

export const ExpenseItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ExpensesItemTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ExpensesMoney = styled.p`
  ${interMedium}
  color: var(--Red-Red-100, #fd3c4a);
  text-align: right;
  font-size: 24px;
  line-height: normal;
`;

export const ExpensesType = styled.img``;

export const ExpensesTypeText = styled(DropDownText)`
  font-size: 16px;
`;


interface SmallIconProps{
  color: string
}

export const SmallIcon = styled.div<SmallIconProps>`
  width: 20px;
  height: 20px;
  background-color: ${({color})=> color};
  border-radius: 100px;
  margin-right: 8px;
`