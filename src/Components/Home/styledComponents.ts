import styled from "styled-components";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 91dvh;

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

export const HomeContentContainer = styled.div`
  width: 100%;
  border-radius: 0px 0px 32px 32px;
  background: linear-gradient(
    183deg,
    #fff6e5 9.56%,
    rgba(248, 237, 216, 0) 124.27%
  );
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const HomeContentSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 8%;
`;

export const UserName = styled.h2`
  ${interMedium}
  color: #000;
  text-align: center;
  font-size: 24px;
  line-height: 18px; /* 75% */
  text-align: start;
`;

export const AccountBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 8%;
`;

export const AccountBalanceText = styled.p`
  ${interMedium}
  color: var(--Base-Light-Light-20, #91919f);
  font-size: 14px;
  line-height: normal;
`;

export const AccountBalanceMoney = styled.p`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-75, #161719);
  text-align: center;
  font-size: 40px;
  line-height: normal;
`;

export const IncomeAndExpenseContainer = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  padding-top: 8%;
  gap: 4%;
  padding-bottom: 8%;
`;

export const IncomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  background-color: #00a86b;
  border-radius: 16px;
  gap: 8px;
  padding: 16px;
`;

export const IconAndTextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const IncomeAndExpenseImage = styled.img`
  height: 24px;
  width: 24px;
`;

export const IncomeAndExpenseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IncomeAndExpenseHeading = styled.p`
  ${interMedium}
  color: var(--Base-Light-Light-80, #fcfcfc);
  font-size: 14px;
  line-height: normal;
`;

export const IncomeAndExpenseMoney = styled.p`
  ${interSemiBold}
  color: var(--Base-Light-Light-80, #fcfcfc);
  font-size: 22px;
  line-height: normal;
`;

export const ExpenseContainer = styled(IncomeContainer)`
  background-color: #fd3c4a;
`;

export const RecentTransactionsContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 10px;
  width: 90%;
  justify-content: space-between;
`;

export const RecentTransactionText = styled.p`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-25, #292b2d);

  font-size: 18px;
  line-height: normal;
`;

export const SeeAllButton = styled.button`
  ${interMedium}
  border-radius: 40px;
  background: var(--Violet-Violet-20, #eee5ff);
  display: flex;
  height: 32px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: var(--Violet-Violet-100, #7f3dff);
  text-align: center;

  font-size: 14px;
  line-height: 18px;
`;

export const RecentItemsContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-height: 50dvh;
  overflow: scroll;
  padding-top: 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 0px;
`;

export const NoTransactionsMainContainer = styled.div``;

export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BulbImage = styled.img`
  height: 30px;
  width: 30px;
`;
