import styled from "styled-components";
import {
  interBlack,
  interBold,
  interMedium,
  interRegular,
  interSemiBold,
} from "../../Constants/fontStyles";
import {
  ButtonContainer,
  ViewMoreButton,
} from "../SmartSpendingSuggestions/styledComponents";

export const MonthReviewContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    height: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const MonthReviewSubContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MonthReviewMainContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 8%;
  padding-bottom: 8%;
  gap: 24px;
`;

export const MonthReviewTopContainer = styled.div``;

export const MonthReviewHeading = styled.p`
  ${interSemiBold}
  color: white;
  font-size: 36px;
  line-height: 1.5;
  color: black;
  text-align: left;
`;

export const MonthReviewBottomContainer = styled.div`
  padding-top: 8%;
  padding-bottom: 8%;
`;

export const MonthReviewItemsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface MonthReviewProp {
  isOpen: boolean;
}

export const ItemContainerMonthReview = styled.div<MonthReviewProp>`
  border: 1px #c5b0ee solid;
  border-radius: 12px;
  padding-top: 32px;
  padding-bottom: 16px;
  box-shadow: 0px 4px 24px 0px #00000014;
  height: auto;
  transition: height 0.3s ease-in;
`;

export const ItemSubContainerMonthReview = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
`;

export const OverviewContents = styled.div`
  padding-top: 12px;
`;

export const IconReview = styled.img`
  width: 32px;
  height: 32px;
  padding-top: 14px;
`;

export const ContentsAlignment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MonthReviewContainerHeading = styled.p`
  ${interMedium}
  font-size: 20px;
  text-align: left;
`;

export const MonthReviewContainerSubHeading = styled.p`
  ${interRegular}
  font-size: 16px;
  text-align: left;
  line-height: 1.6;
`;

export const CategoryItemsMonthlyReview = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const CategoryItemReview = styled.p`
  color: #9f76ef;
  border: 1px solid #9f76ef;
  ${interMedium}
  width: fit-content;
  padding: 6px 12px 6px 12px;
  border-radius: 24px;
  font-size: 14px;
`;

export const MoreContentsReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TipsReviewSideHeading = styled.p`
  ${interSemiBold}
  font-size: 16px;
  text-align: left;
`;

export const UlElementReview = styled.ul`
  padding: 0px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItemReview = styled.li`
  line-height: 1.8;
  text-align: left;
`;

export const TipsHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SideIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const ViewMoreButtonExpense = styled(ViewMoreButton)`
  text-align: center;
`;

export const ExpenseViewMoreButton = styled(ViewMoreButton)`
  margin-top: 8px;
`;

export const ExpenseButtonContainer = styled(ButtonContainer)`
  padding-bottom: 0px;
`;

export const ActualAmount = styled.span`
  color: red;
  ${interMedium}
`;

export const CategoryItem = styled.span`
  ${interBold}
`;

export const AmountMinus = styled.span`
  ${interBold}
`;

export const RecommentAmount = styled.span`
  color: green;
  ${interMedium}
`;

export const TextCategory = styled.li`
  text-align: left;
  line-height: 1.6;
  border: 1px solid black;
  border-radius: 16px;
  list-style-type: none;
  padding: 16px;
`;

export const TextCategoryItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  width: 95%;
  margin: auto;
  gap: 18px;
`;


export const NoTransactionHeading = styled.h1`
  height: 55dvh;
  display: flex;
  align-items: center;
  color: rgb(198, 198, 198);
`