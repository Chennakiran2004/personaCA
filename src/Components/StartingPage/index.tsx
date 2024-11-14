import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { interBold } from "../../Constants/fontStyles";
import {
  TextContainer,
  CAContainer,
  CAText,
  PersonaText,
  TextMainConainer,
  GifImage,
} from "./styledComponents";
import { ProfileItemImage } from "../Profile/styledComponents";

// Define the scale-in animation using keyframes
const scaleIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const IntroStartingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100vw;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

const IntroSubContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #7f3dff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 72vh;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
  }
`;

const Heading = styled.h1`
  ${interBold}
  font-size: 36px;
  color: white;
  animation: ${scaleIn} 1s ease-in-out;
`;

const StartingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to another page after 2 seconds
    const timer = setTimeout(() => {
      navigate("/intro"); // Replace '/intro' with the route you want to redirect to
    }, 2900);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <IntroStartingContainer>
      <IntroSubContainer>
        <TextContainer>
          <GifImage src="/gifs/logoanimation.gif" />
          <TextMainConainer>
            <PersonaText>Persona</PersonaText>
            <CAContainer>
              <CAText>CA</CAText>
            </CAContainer>
          </TextMainConainer>
        </TextContainer>
      </IntroSubContainer>
    </IntroStartingContainer>
  );
};

export default StartingPage;
