import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
} from "./styledComponents";

const GainTotalControlOfYourMoney = () => {
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home1.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>
          Gain total control of your money
        </CarouselItemHeading>
        <CarouselItemDescription>
          Become your own money manager and make every cent count
        </CarouselItemDescription>
      </CarouselItemTextContainer>
    </CarouseItemMainContainer>
  );
};

export default GainTotalControlOfYourMoney;
