import styled from "styled-components";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";
import { Link } from "react-router-dom";

export const RecentTransactionItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  gap: 4%;
  text-decoration: none;
`;

export const RecentTransactionItemImage = styled.img``;

export const RecentTransactionItemDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RecentTransactionItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 16px;
  align-items: flex-start;
`;

export const RecentTransactionItemType = styled.p`
  ${interMedium}
  color: var(--Base-Dark-Dark-25, #292b2d);
  font-size: 16px;
  line-height: normal;
`;

export const RecentTransactionItemDescription = styled.p`
  ${interMedium}
  color: var(--Base-Light-Light-20, #91919f);
  font-size: 13px;
  line-height: normal;
`;

export const RecentTransactionItemPriceAndTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 16px;
`;

export const RecentTransactionItemPrice = styled.p`
  ${interSemiBold}
  color: var(--Red-Red-100, #FD3C4A);
  font-size: 16px;
  line-height: normal;
`;
