import styled from "styled-components";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

// Types for GifWrapper props
interface GifWrapperProps {
  gifUrl: string;
}

export const OuterAllSetContainer = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 70vh;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const CombinedGifAndtextDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AllSetImage = styled.img`
  width: 90%;
  height: 100%;
`;

export const AllSetText = styled.h2`
  color: #000;
`;

export const ContinueButtonInAllSet = styled(GlobalButton1)`
  width: 90%;
  margin-top: 26%;
`;

export const GifWrapper = styled.div<GifWrapperProps>`
  width: 300px;
  height: 300px;
  background: ${(props) => `url(${props.gifUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
