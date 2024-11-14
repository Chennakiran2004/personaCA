import styled from "styled-components";
import {
  interBold,
  interMedium,
  interSemiBold,
} from "../../Constants/fontStyles";

export const CarouseItemMainContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const CarouselItemImage = styled.img`
  width: 312px;
  height: 312px;
  flex-shrink: 0;
`;

export const CarouselItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CarouselItemHeading = styled.h1`
  color: var(--Base-Dark-Dark-50, #212325);
  text-align: center;

  ${interBold}
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 0px;
`;

export const CarouselItemDescription = styled.p`
  ${interMedium}

  color: var(--Base-Light-Light-20, #91919f);
  text-align: center;
  font-size: 16px;
  line-height: normal;
  margin: 0;
`;

export const GlobalButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 96px;
  z-index: 10;
`;

export const GlobalButton1 = styled.button`
  ${interSemiBold}

  display: flex;
  width: 100%;
  height: 56px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: var(--Base-Light-Light-80, #fcfcfc);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  border: none;
  border-radius: 16px;
  background: var(--Violet-Violet-100, #7f3dff);
`;

export const GlobalButton2 = styled.button`
  ${interSemiBold}
  display: flex;
  width: 100%;
  height: 56px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: var(--Base-Light-Light-80, #7f3dff);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  border-radius: 16px;
  background: var(--Violet-Violet-20, #eee5ff);
  border: none;
`;
