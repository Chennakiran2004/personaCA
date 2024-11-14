import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
  GlobalButton1,
  GlobalButton2,
  GlobalButtonsContainer,
} from "../GainTotalControlOfYourMoney/styledComponents";
import { NavigationEvents } from "../../Constants/EventHandlers";

const PlanningAhead = () => {
  const { navigateSignIn, navigateLogin } = NavigationEvents();

  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home3.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>Planning ahead</CarouselItemHeading>
        <CarouselItemDescription style={{ marginBottom: "24px" }}>
          Setup your budget for each category so you in control{" "}
        </CarouselItemDescription>
      </CarouselItemTextContainer>
      <GlobalButtonsContainer>
        <GlobalButton1 onClick={navigateSignIn}>Sign Up</GlobalButton1>
        <GlobalButton2 onClick={navigateLogin}>Login</GlobalButton2>
      </GlobalButtonsContainer>
    </CarouseItemMainContainer>
  );
};

export default PlanningAhead;
