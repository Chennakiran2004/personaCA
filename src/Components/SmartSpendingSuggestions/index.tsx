// import axios from "axios";
// import {
//   ChangingTokens,
//   NavigationEvents,
// } from "../../Constants/EventHandlers";
// import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
// import {
//   ButtonContainer,
//   LetsGoContainer,
//   SmartSpendingCardsContainer,
//   SmartSpendingContentTextContainer,
//   SmartSpendingIcon,
//   SmartSpendingItemCard,
//   SmartSpendingItemContentContainer,
//   SmartSpendingSuggestionsHeading,
//   SmartSpendingSuggestionsMainContainer,
//   SmartSpendingSuggestionsSubContainer,
//   SmartSpendingType,
//   Suggestion,
//   ViewMoreButton,
//   ViewMoreButtonImage,
// } from "./styledComponents";

// import { url } from "../../Constants/EventHandlers";
// import { useState, useEffect } from "react";
// import { handleAxiosError } from "../../Constants/errorHandler";

// interface UserSpendingSuggestions {
//   salary: number;
//   rent: number;
//   food: number;
//   shopping: number;
//   travelling: number;
//   health: number;
//   entertainment: number;
//   savings: number;
//   miscellaneous: number;
//   city: string;
//   gender: string;
//   location: string;
//   preference: string;
// }

// const SmartSpendingSuggestions = () => {
//   const { naviagteToYouAreAllSet } = NavigationEvents();

//   const [spendingData, setSpendingData] =
//     useState<UserSpendingSuggestions | null>(null);

//   const [expandedCard, setExpandedCard] = useState<string | null>(null);

//   const { accessToken } = ChangingTokens();

//   const fetchingData = async () => {
//     try {
//       const response = await axios.post(
//         `${url}/get_user_expense_suggestions/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-type": "Application/json",
//           },
//         }
//       );
//       setSpendingData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       handleAxiosError(error);
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchingData();
//   }, []);

//   const toggleCard = (cardType: string) => {
//     setExpandedCard((prev) => (prev === cardType ? null : cardType));
//   };

//   const renderCard = (
//     type: string,
//     value: number | undefined,
//     tip: string,
//     imageSrc: string
//   ) => (
//     <SmartSpendingItemCard>
//       <SmartSpendingItemContentContainer>
//         <SmartSpendingIcon src={imageSrc} alt={type} />
//         <SmartSpendingContentTextContainer>
//           <SmartSpendingType>{type} Suggestion: </SmartSpendingType>
//           <SmartSpendingType>
//             <Suggestion>
//               <span style={{ fontWeight: "bold" }}>{value}</span> of your
//               Salary&nbsp;
//               <span style={{ fontWeight: "bold" }}>{spendingData?.salary}</span>
//               .
//             </Suggestion>
//           </SmartSpendingType>
//           {expandedCard === type && (
//             <div>
//               <p style={{ textAlign: "left" }}>{tip}</p>
//             </div>
//           )}
//         </SmartSpendingContentTextContainer>
//       </SmartSpendingItemContentContainer>
//       <ButtonContainer>
//         <ViewMoreButton onClick={() => toggleCard(type)}>
//           {expandedCard === type ? "View Less" : "View More"}{" "}
//           <ViewMoreButtonImage
//             src="/Images/arrow down 2.svg"
//             alt="View more"
//             isExpanded={expandedCard === type} // Pass the expanded state
//           />
//         </ViewMoreButton>
//       </ButtonContainer>
//     </SmartSpendingItemCard>
//   );

//   const tips = {
//     Rent: "Keep your rent under control! Aim for no more than 30% of your income. If it's getting too high, consider a more affordable living space.",
//     Food: "Cooking at home can be fun and save you money! Plan your meals and avoid unnecessary takeout.",
//     Shopping:
//       "Shop smart! Set a monthly limit for buying clothes, gadgets, and other fun items. Wait for sales or look for discounts to get the best deals.",
//     Travelling:
//       "Keep transportation costs within 10%. Consider biking, walking, or using public transport to save money and improve your health.",
//     Health:
//       "Invest in preventive health measures and ensure you have insurance to cover unexpected medical expenses.",
//     Entertainment:
//       "Enjoy entertainment, but stay within a budget. Look for affordable or free activities that you can enjoy with family and friends.",
//     Savings:
//       "Secure your future by saving 20% of your income. Automate your savings so it's easy and consistent!",
//     Miscellaneous:
//       "Keep an extra cushion for life's surprises. This includes utilities, emergency funds, and other unexpected expenses.",
//   };

//   const images = {
//     Rent: "/Images/housingandrenticon1.svg",
//     Food: "/Images/foodicon1.svg",
//     Shopping: "/Images/shoppingicon1.svg",
//     Travelling: "/Images/transportationicon1.svg",
//     Health: "/Images/healthicon1.svg",
//     Entertainment: "/Images/entertainmenticon1.svg",
//     Savings: "/Images/saving.svg",
//     Miscellaneous: "/Images/miscellaneousicon1.svg",
//   };

//   return (
//     <SmartSpendingSuggestionsMainContainer>
//       <SmartSpendingSuggestionsSubContainer>
//         <SmartSpendingSuggestionsHeading>
//           Smart Spending Suggestions Based on Your Salary
//         </SmartSpendingSuggestionsHeading>
//         <SmartSpendingCardsContainer>
//           {renderCard("Rent", spendingData?.rent, tips.Rent, images.Rent)}
//           {renderCard("Food", spendingData?.food, tips.Food, images.Food)}
//           {renderCard(
//             "Shopping",
//             spendingData?.shopping,
//             tips.Shopping,
//             images.Shopping
//           )}
//           {renderCard(
//             "Travelling",
//             spendingData?.travelling,
//             tips.Travelling,
//             images.Travelling
//           )}
//           {renderCard(
//             "Health",
//             spendingData?.health,
//             tips.Health,
//             images.Health
//           )}
//           {renderCard(
//             "Entertainment",
//             spendingData?.entertainment,
//             tips.Entertainment,
//             images.Entertainment
//           )}
//           {renderCard(
//             "Savings",
//             spendingData?.savings,
//             tips.Savings,
//             images.Savings
//           )}
//           {renderCard(
//             "Miscellaneous",
//             spendingData?.miscellaneous,
//             tips.Miscellaneous,
//             images.Miscellaneous
//           )}
//         </SmartSpendingCardsContainer>

//         <LetsGoContainer>
//           <GlobalButton1 onClick={naviagteToYouAreAllSet}>
//             Let's Go
//           </GlobalButton1>
//         </LetsGoContainer>
//       </SmartSpendingSuggestionsSubContainer>
//     </SmartSpendingSuggestionsMainContainer>
//   );
// };

// export default SmartSpendingSuggestions;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { handleAxiosError } from "../../Constants/errorHandler";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import {
  ButtonContainer,
  LetsGoContainer,
  SmartSpendingCardsContainer,
  SmartSpendingContentTextContainer,
  SmartSpendingIcon,
  SmartSpendingItemCard,
  SmartSpendingItemContentContainer,
  SmartSpendingSuggestionsHeading,
  SmartSpendingSuggestionsMainContainer,
  SmartSpendingSuggestionsSubContainer,
  SmartSpendingType,
  Suggestion,
  ViewMoreButton,
  ViewMoreButtonImage,
} from "./styledComponents";

import { BackImage } from "../UserInfo/styledComponents";
import NotFound from "../NotFound";

// Define interfaces for props and spending suggestions
interface SmartSpendingSuggestionsProps {
  showLetsGoButton?: boolean;
}

interface UserSpendingSuggestions {
  salary: number;
  rent: number;
  food: number;
  shopping: number;
  travelling: number;
  health: number;
  entertainment: number;
  savings: number;
  miscellaneous: number;
  city: string;
  gender: string;
  location: string;
  preference: string;
}

// SmartSpendingSuggestions Component
const SmartSpendingSuggestions: React.FC<SmartSpendingSuggestionsProps> = ({
  showLetsGoButton = false,
}) => {
  const { naviagteToYouAreAllSet, handleBack } = NavigationEvents();
  const [notFound, setNotFound] = useState(false);

  const [spendingData, setSpendingData] =
    useState<UserSpendingSuggestions | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { accessToken } = ChangingTokens();

  // Fetch data function
  const fetchingData = async () => {
    try {
      const response = await axios.post(
        `${url}/get_user_expense_suggestions/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "Application/json",
          },
        }
      );
      setSpendingData(response.data);
      console.log(response.data);
    } catch (error: any) {
      handleAxiosError(error);
      if (error.response && error.response.status === 404) {
        setNotFound(true);
      }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  // Toggle card view function
  const toggleCard = (cardType: string) => {
    setExpandedCard((prev) => (prev === cardType ? null : cardType));
  };

  // Helper function to render a spending card
  const renderCard = (
    type: string,
    value: number | undefined,
    tip: string,
    imageSrc: string
  ) => (
    <SmartSpendingItemCard>
      <SmartSpendingItemContentContainer>
        <SmartSpendingIcon src={imageSrc} alt={type} />
        <SmartSpendingContentTextContainer>
          <SmartSpendingType>{type} Suggestion: </SmartSpendingType>
          <SmartSpendingType>
            <Suggestion>
              <span style={{ fontWeight: "bold" }}>{value}</span> of your
              Salary&nbsp;
              <span style={{ fontWeight: "bold" }}>{spendingData?.salary}</span>
              .
            </Suggestion>
          </SmartSpendingType>
          {expandedCard === type && (
            <div>
              <p style={{ textAlign: "left" }}>{tip}</p>
            </div>
          )}
        </SmartSpendingContentTextContainer>
      </SmartSpendingItemContentContainer>
      <ButtonContainer>
        <ViewMoreButton onClick={() => toggleCard(type)}>
          {expandedCard === type ? "View Less" : "View More"}{" "}
          <ViewMoreButtonImage
            src="/Images/arrow down 2.svg"
            alt="View more"
            isExpanded={expandedCard === type}
          />
        </ViewMoreButton>
      </ButtonContainer>
    </SmartSpendingItemCard>
  );

  // Tips and images for each spending category
  const tips = {
    Rent: "Keep your rent under control! Aim for no more than 30% of your income. If it's getting too high, consider a more affordable living space.",
    Food: "Cooking at home can be fun and save you money! Plan your meals and avoid unnecessary takeout.",
    Shopping:
      "Shop smart! Set a monthly limit for buying clothes, gadgets, and other fun items. Wait for sales or look for discounts to get the best deals.",
    Travelling:
      "Keep transportation costs within 10%. Consider biking, walking, or using public transport to save money and improve your health.",
    Health:
      "Invest in preventive health measures and ensure you have insurance to cover unexpected medical expenses.",
    Entertainment:
      "Enjoy entertainment, but stay within a budget. Look for affordable or free activities that you can enjoy with family and friends.",
    Savings:
      "Secure your future by saving 20% of your income. Automate your savings so it's easy and consistent!",
    Miscellaneous:
      "Keep an extra cushion for life's surprises. This includes utilities, emergency funds, and other unexpected expenses.",
  };

  const images = {
    Rent: "/Images/housingandrenticon1.svg",
    Food: "/Images/foodicon1.svg",
    Shopping: "/Images/shoppingicon1.svg",
    Travelling: "/Images/transportationicon1.svg",
    Health: "/Images/healthicon1.svg",
    Entertainment: "/Images/entertainmenticon1.svg",
    Savings: "/Images/saving.svg",
    Miscellaneous: "/Images/miscellaneousicon1.svg",
  };

  return (
    <SmartSpendingSuggestionsMainContainer showLetsGoButton={showLetsGoButton}>
      <SmartSpendingSuggestionsSubContainer>
        <BackImage
          onClick={handleBack}
          size={40}
          style={{ position: "relative", left: "-48%" }}
        />
        <SmartSpendingSuggestionsHeading>
          Smart Spending Suggestions Based on Your Salary
        </SmartSpendingSuggestionsHeading>
        <SmartSpendingCardsContainer showLetsGoButton={showLetsGoButton}>
          {renderCard("Rent", spendingData?.rent, tips.Rent, images.Rent)}
          {renderCard("Food", spendingData?.food, tips.Food, images.Food)}
          {renderCard(
            "Shopping",
            spendingData?.shopping,
            tips.Shopping,
            images.Shopping
          )}
          {renderCard(
            "Travelling",
            spendingData?.travelling,
            tips.Travelling,
            images.Travelling
          )}
          {renderCard(
            "Health",
            spendingData?.health,
            tips.Health,
            images.Health
          )}
          {renderCard(
            "Entertainment",
            spendingData?.entertainment,
            tips.Entertainment,
            images.Entertainment
          )}
          {renderCard(
            "Savings",
            spendingData?.savings,
            tips.Savings,
            images.Savings
          )}
          {renderCard(
            "Miscellaneous",
            spendingData?.miscellaneous,
            tips.Miscellaneous,
            images.Miscellaneous
          )}
        </SmartSpendingCardsContainer>

        {/* Conditionally render the Let's Go button based on the prop */}
        {showLetsGoButton && (
          <LetsGoContainer>
            <GlobalButton1 onClick={naviagteToYouAreAllSet}>
              Let's Go
            </GlobalButton1>
          </LetsGoContainer>
        )}
      </SmartSpendingSuggestionsSubContainer>
    </SmartSpendingSuggestionsMainContainer>
  );
};

export default SmartSpendingSuggestions;
