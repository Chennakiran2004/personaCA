// import React, { useEffect, useState } from 'react';
// import { ButtonContainer, ViewMoreButton, ViewMoreButtonImage } from "../SmartSpendingSuggestions/styledComponents";
// import {
//     MonthReviewContainer,
//     MonthReviewSubContainer,
//     MonthReviewMainContainer,
//     MonthReviewTopContainer,
//     MonthReviewHeading,
//     MonthReviewItemsContainer,
//     ItemContainerMonthReview,
//     ItemSubContainerMonthReview,
//     OverviewContainer,
//     IconReview,
//     ContentsAlignment,
//     MonthReviewContainerHeading,
//     MonthReviewContainerSubHeading,
//     CategoryItemsMonthlyReview,
//     CategoryItemReview,
//     MoreContentsReview,
//     TipsReviewSideHeading,
//     UlElementReview,
//     ListItemReview,
//     ExpenseButtonContainer,
// } from "./styledcomponent";
// import axios from 'axios';
// import { ChangingTokens, url } from '../../Constants/EventHandlers';

// const MonthReview = () => {
//     const [expandedCard, setExpandedCard] = useState(null);
//     const [underSpent, setUnderSpent] = useState([])
//     const [overSpent, setOverSpent] = useState([])

//     const toggleCard = (cardIndex: any) => {
//         setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
//     };

//     const {accessToken} = ChangingTokens()

//     useEffect(()=>{
//         const fetching = async()=>{
//             try{
//                 const response = await axios.post(
//                     `${url}/get_user_expenses_comparison_at_eom/`, {
//                         month: "10"
//                     }, {
//                         headers: {
//                           Authorization: `Bearer ${accessToken}`,
//                           "Content-type": "Application/json",
//                         },
//                       }
//                   )
//                   const categories = response.data.under_spent.map((eachItem: any)=> {
//                     return eachItem.category
//                   })

//                   const OverSpentCategories = response.data.over_spent.map((eachItem: any)=> {
//                     return eachItem.category
//                   })

//                   setUnderSpent(categories)
//                   setOverSpent(OverSpentCategories)

//                   console.log(response.data)
//             }catch(e){
//                 console.log(e)
//             }
//         }
//         ;

//         fetching()
//     }, [])

//     return (
//         <MonthReviewContainer>
//             <MonthReviewSubContainer>
//                 <MonthReviewMainContainer>
//                     <MonthReviewTopContainer>
//                         <MonthReviewHeading>Monthly Spending Review</MonthReviewHeading>
//                     </MonthReviewTopContainer>
//                     <MonthReviewItemsContainer>
//                         {[
//                             {
//                                 title: "Congratulations! You're on Track!",
//                                 subTitle: "Keep up the great work, and remember to invest wisely to secure your financial future!",
//                                 categories: underSpent,
//                                 tips: [
//                                     "Mutual Funds: A low-risk option for growing your savings.",
//                                     "Stock Market: If you’re willing to take a little more risk, stocks can offer higher returns.",
//                                     "Retirement Funds: Start contributing to your future by boosting your retirement savings!"
//                                 ],
//                             },
//                             {
//                                 title: "Heads Up! Higher Spending Alert!",
//                                 subTitle: "Watch out! You’ve spent more than the suggested amount in these areas:",
//                                 tips: [
//                                     "Cut unnecessary expenses (e.g., dine out less, reduce online shopping).",
//                                     "Find cheaper alternatives (e.g., discount stores).",
//                                     "It’s easy to overspend in these categories, but reducing spending here can help you save more in the long run."
//                                 ],
//                                 categories: overSpent
//                             },
//                             {
//                                 title: "Congratulations! You're on Track!",
//                                 subTitle: "Keep up the great work, and remember to invest wisely to secure your financial future!",
//                                 categories: overSpent,
//                             },
//                         ].map((card, index) => (
//                             <ItemContainerMonthReview key={index} isOpen={expandedCard === index}>
//                                 <ItemSubContainerMonthReview>
//                                     <OverviewContainer>
//                                         <div>
//                                             <IconReview src={index === 1 ? "/Images/warninglogo.svg" : "/Images/calendaricon.svg"} />
//                                         </div>
//                                         <ContentsAlignment>
//                                             <MonthReviewContainerHeading>{card.title}</MonthReviewContainerHeading>
//                                             <MonthReviewContainerSubHeading>{card.subTitle}</MonthReviewContainerSubHeading>
//                                             {card.categories && card.categories.length > 0 && (
//                                                 <CategoryItemsMonthlyReview>
//                                                     {card.categories.map((category, catIndex) => (
//                                                         <CategoryItemReview key={catIndex}>{category}</CategoryItemReview>
//                                                     ))}
//                                                 </CategoryItemsMonthlyReview>
//                                             )}
//                                         </ContentsAlignment>
//                                     </OverviewContainer>
//                                     <MoreContentsReview>
//                                         {expandedCard === index && card.tips && (
//                                             <>
//                                                 <TipsReviewSideHeading>Pro Tip 🔑</TipsReviewSideHeading>
//                                                 <UlElementReview>
//                                                     {card.tips.map((tip, tipIndex) => (
//                                                         <ListItemReview key={tipIndex}>{tip}</ListItemReview>
//                                                     ))}
//                                                 </UlElementReview>
//                                             </>
//                                         )}
//                                         <ExpenseButtonContainer>
//                                             <ViewMoreButton onClick={() => toggleCard(index)}>
//                                                 {expandedCard === index ? "View Less" : "View More"}
//                                                 <ViewMoreButtonImage
//                                                     src="/Images/arrow down 2.svg"
//                                                     alt="View more"
//                                                     isExpanded={expandedCard === index}
//                                                 />
//                                             </ViewMoreButton>
//                                         </ExpenseButtonContainer>
//                                     </MoreContentsReview>
//                                 </ItemSubContainerMonthReview>
//                             </ItemContainerMonthReview>
//                         ))}
//                     </MonthReviewItemsContainer>
//                 </MonthReviewMainContainer>
//             </MonthReviewSubContainer>
//         </MonthReviewContainer>
//     );
// };

// export default MonthReview;

import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ViewMoreButton,
  ViewMoreButtonImage,
} from "../SmartSpendingSuggestions/styledComponents";
import {
  MonthReviewContainer,
  MonthReviewSubContainer,
  MonthReviewMainContainer,
  MonthReviewTopContainer,
  MonthReviewHeading,
  MonthReviewItemsContainer,
  ItemContainerMonthReview,
  ItemSubContainerMonthReview,
  OverviewContainer,
  IconReview,
  ContentsAlignment,
  MonthReviewContainerHeading,
  MonthReviewContainerSubHeading,
  CategoryItemsMonthlyReview,
  CategoryItemReview,
  MoreContentsReview,
  TipsReviewSideHeading,
  UlElementReview,
  ListItemReview,
  ExpenseButtonContainer,
  ActualAmount,
  CategoryItem,
  AmountMinus,
  RecommentAmount,
  TextCategory,
  TextCategoryItems,
  NoTransactionHeading,
} from "./styledcomponent";
import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { handleAxiosError } from "../../Constants/errorHandler";
import { BackImage } from "../UserInfo/styledComponents";
import NotFound from "../NotFound";

const MonthReview = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [underSpent, setUnderSpent] = useState([]);
  const [overSpent, setOverSpent] = useState([]);
  const { handleBack } = NavigationEvents();

  const [overSpentCategoriesArr, setOverSpentCategoriesArr] = useState([]);
  const [underSpentCategoriesArr, setUnderSpentCategoriesArr] = useState([]);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const { accessToken } = ChangingTokens();

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await axios.post(
          `${url}/get_user_expenses_comparison_at_eom/`,
          {
            month: "10",
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );
        const categories = response.data.under_spent.map(
          (eachItem: any) => eachItem.category
        );
        const overSpentCategories = response.data.over_spent.map(
          (eachItem: any) => eachItem.category
        );

        setUnderSpent(categories);
        setOverSpent(overSpentCategories);

        setOverSpentCategoriesArr(response.data.over_spent);
        setUnderSpentCategoriesArr(response.data.under_spent);

        console.log(response.data);
      } catch (e: any) {
        handleAxiosError(e);
        if (e.response && e.response.status === 404) {
          return <NotFound />;
        }
      }
    };

    fetching();
  }, []);

  return (
    <MonthReviewContainer>
      <MonthReviewSubContainer>
        <MonthReviewMainContainer>
          <BackImage
            onClick={handleBack}
            size={40}
            style={{ position: "relative", left: "0%" }}
          />
          <MonthReviewTopContainer>
            <MonthReviewHeading>Monthly Spending Review</MonthReviewHeading>
          </MonthReviewTopContainer>
          <MonthReviewItemsContainer>
            {/* Render only if underSpent categories exist */}
            {underSpent.length > 0 && (
              <ItemContainerMonthReview isOpen={expandedCard === 0}>
                <ItemSubContainerMonthReview>
                  <OverviewContainer>
                    <div>
                      <IconReview src="/Images/calendaricon.svg" />
                    </div>
                    <ContentsAlignment>
                      <MonthReviewContainerHeading>
                        Congratulations! You're on Track!
                      </MonthReviewContainerHeading>
                      <MonthReviewContainerSubHeading>
                        Keep up the great work, and remember to invest wisely to
                        secure your financial future!
                      </MonthReviewContainerSubHeading>
                      <CategoryItemsMonthlyReview>
                        {underSpent.map((category, catIndex) => (
                          <CategoryItemReview key={catIndex}>
                            {category}
                          </CategoryItemReview>
                        ))}
                      </CategoryItemsMonthlyReview>
                    </ContentsAlignment>
                  </OverviewContainer>
                  <MoreContentsReview>
                    {expandedCard === 0 && (
                      <>
                        <TipsReviewSideHeading>
                          Pro Tip 🔑
                        </TipsReviewSideHeading>
                        <UlElementReview>
                          <ListItemReview>
                            Mutual Funds: A low-risk option for growing your
                            savings.
                          </ListItemReview>
                          <ListItemReview>
                            Stock Market: If you’re willing to take a little
                            more risk, stocks can offer higher returns.
                          </ListItemReview>
                          <ListItemReview>
                            Retirement Funds: Start contributing to your future
                            by boosting your retirement savings!
                          </ListItemReview>
                        </UlElementReview>
                      </>
                    )}
                    <ExpenseButtonContainer>
                      <ViewMoreButton onClick={() => toggleCard(0)}>
                        {expandedCard === 0 ? "View Less" : "View More"}
                        <ViewMoreButtonImage
                          src="/Images/arrow down 2.svg"
                          alt="View more"
                          isExpanded={expandedCard === 0}
                        />
                      </ViewMoreButton>
                    </ExpenseButtonContainer>
                  </MoreContentsReview>
                </ItemSubContainerMonthReview>
              </ItemContainerMonthReview>
            )}

            {/* Render only if overSpent categories exist */}
            {overSpent.length > 0 && (
              <ItemContainerMonthReview isOpen={expandedCard === 1}>
                <ItemSubContainerMonthReview>
                  <OverviewContainer>
                    <div>
                      <IconReview src="/Images/warninglogo.svg" />
                    </div>
                    <ContentsAlignment>
                      <MonthReviewContainerHeading>
                        Heads Up! Higher Spending Alert!
                      </MonthReviewContainerHeading>
                      <MonthReviewContainerSubHeading>
                        Watch out! You’ve spent more than the suggested amount
                        in these areas:
                      </MonthReviewContainerSubHeading>
                      <CategoryItemsMonthlyReview>
                        {overSpent.map((category, catIndex) => (
                          <CategoryItemReview key={catIndex}>
                            {category}
                          </CategoryItemReview>
                        ))}
                      </CategoryItemsMonthlyReview>
                    </ContentsAlignment>
                  </OverviewContainer>
                  <MoreContentsReview>
                    {expandedCard === 1 && (
                      <React.Fragment>
                        <TextCategoryItems>
                          {overSpentCategoriesArr.map((eachItem: any) => (
                            <React.Fragment key={eachItem.category}>
                              <TextCategory>
                                You've spent{" "}
                                <ActualAmount>
                                  ₹{Math.round(eachItem.actual_amount)}
                                </ActualAmount>{" "}
                                on{" "}
                                <CategoryItem>{eachItem.category}</CategoryItem>
                                , which is{" "}
                                <AmountMinus>
                                  {Math.round(
                                    eachItem.actual_amount -
                                      eachItem.recommended_amount
                                  )}
                                </AmountMinus>{" "}
                                more than the suggested amount of ₹
                                <RecommentAmount>
                                  {Math.round(eachItem.recommended_amount)}
                                </RecommentAmount>
                                .
                              </TextCategory>
                            </React.Fragment>
                          ))}
                        </TextCategoryItems>
                        <TipsReviewSideHeading>
                          Pro Tip 🔑
                        </TipsReviewSideHeading>
                        <UlElementReview>
                          <ListItemReview>
                            Cut unnecessary expenses (e.g., dine out less,
                            reduce online shopping).
                          </ListItemReview>
                          <ListItemReview>
                            Find cheaper alternatives (e.g., discount stores).
                          </ListItemReview>
                          <ListItemReview>
                            It’s easy to overspend in these categories, but
                            reducing spending here can help you save more in the
                            long run.
                          </ListItemReview>
                        </UlElementReview>
                      </React.Fragment>
                    )}
                    <ExpenseButtonContainer>
                      <ViewMoreButton onClick={() => toggleCard(1)}>
                        {expandedCard === 1 ? "View Less" : "View More"}
                        <ViewMoreButtonImage
                          src="/Images/arrow down 2.svg"
                          alt="View more"
                          isExpanded={expandedCard === 1}
                        />
                      </ViewMoreButton>
                    </ExpenseButtonContainer>
                  </MoreContentsReview>
                </ItemSubContainerMonthReview>
              </ItemContainerMonthReview>
            )}
            {(overSpent.length <= 0 && underSpent.length <= 0) && <NoTransactionHeading>To review your monthly spending, please add your transactions.</NoTransactionHeading>}
          </MonthReviewItemsContainer>
        </MonthReviewMainContainer>
      </MonthReviewSubContainer>
    </MonthReviewContainer>
  );
};

export default MonthReview;
