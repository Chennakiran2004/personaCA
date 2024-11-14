import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
} from "../GainTotalControlOfYourMoney/styledComponents";

const KnowWhereYourMoneyGoes = () => {
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home2.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>
          Track Your Spending Effortlessly{" "}
        </CarouselItemHeading>
        <CarouselItemDescription>
          Track your transactions with clear categories and simple reports.{" "}
        </CarouselItemDescription>
      </CarouselItemTextContainer>
    </CarouseItemMainContainer>
  );
};

export default KnowWhereYourMoneyGoes;
