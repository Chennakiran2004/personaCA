import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";
import { Link } from "react-router-dom";

export const TabBarMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  height: 9dvh;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 768px;
    bottom: 16%;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const TabBarSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  background: #fff;
  align-items: baseline;
  padding-bottom: 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    border-radius: 0px 0px 16px 16px;
    width: 100%;
  }
`;

export const TabBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
`;

export const TabBarItemImage = styled.img``;

export const TabBarItemText = styled.p`
  ${interMedium}
  color: #c6c6c6;
  font-size: 10px;
  line-height: normal;
`;

export const AddButtonContainer = styled.div`
  position: absolute;
  bottom: 8%;

  @media screen and (min-width: 768px) {
    position: relative;
    bottom: 10%;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: none;

  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;

export const TabBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: -5%;

  @media screen and (min-width: 768px) {
    width: 768px;
    bottom: 20%;
  }
`;

export const BotImage = styled.img`
  position: absolute;
  left: 91%;
  width: 74px;
  height: 96.522px;
  transform: rotate(-32deg);
  bottom: -16%;
  z-index: 4888;

  @media (min-width: 768px) {
    left: 90%;
  }
`;
