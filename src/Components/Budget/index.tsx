import {
  BudgetMainContainer,
  UnderdevelopmentImage,
  UnderdevelopmentText,
} from "./styledComponents";

const Budget = () => {
  return (
    <BudgetMainContainer>
      <UnderdevelopmentImage src="/Images/underdevelopment.svg" />
      <UnderdevelopmentText>
        This page is under development and will be available soon.
      </UnderdevelopmentText>
      <UnderdevelopmentText>Thank you!</UnderdevelopmentText>
    </BudgetMainContainer>
  );
};

export default Budget;
