import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";

export const BudgetMainContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100dvh;
  margin: auto;
`;

export const UnderdevelopmentImage = styled.img``;

export const UnderdevelopmentText = styled.p`
  ${interMedium}
  color: #000;
  text-align: center;
  font-size: 20px;
  line-height: normal;
`;
