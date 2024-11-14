import styled from "styled-components";
import { DescriptionHeading } from "../Transaction/styledComponents";

export const NoTransactionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4%;
`;

export const NoTransactionsHeading = styled(DescriptionHeading)`
  text-align: center;
  font-size: 24px;
`;

export const NoTransactionsImage = styled.img`
  height: 80px;
  width: 80px;
`;
