import React from "react";
import {
  ExpenseItemContainer,
  ExpensesItemTextContainer,
  ExpensesMoney,
  ExpensesType,
  ExpensesTypeText,
} from "../ExpensesItem/styledComponents";
import { MonthDropDown } from "../FinancialReport/styledComponents";
import MyProgressBar from "../ProgressBar";

interface SalaryItemProps {
  progress: number;
  color: string;
  icon: string;
  amount: string;
}

const SalayItem: React.FC<SalaryItemProps> = ({
  progress,
  color,
  icon,
  amount,
}) => {
  return (
    <ExpenseItemContainer>
      <ExpensesItemTextContainer>
        <MonthDropDown>
          <ExpensesType src={icon} />
          <ExpensesTypeText>Salary</ExpensesTypeText>
        </MonthDropDown>
        <ExpensesMoney style={{ color: "green" }}>{amount}</ExpensesMoney>
      </ExpensesItemTextContainer>
      <MyProgressBar progress={progress} color={color} />
    </ExpenseItemContainer>
  );
};

export default SalayItem;
