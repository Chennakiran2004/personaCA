import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 82%;
  margin: auto;
  margin-bottom: 80%;
  border: none;

  @media (min-width: 768px) {
    margin-bottom: 32%;
    gap: 0px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const PersonaText = styled.p`
  color: var(--Base-Light-Light-100, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 54px;
  gap: 10px;
  border-radius: 8px;
  background: #fff;
  padding: 4px;
`;

export const CAText = styled.p`
  color: #ff6c1e;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextMainConainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const GifImage = styled.img`
  width: 56%;

  @media (min-width: 768px) {
    width: 35%;
  }
`;
