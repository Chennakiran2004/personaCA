import styled, { keyframes } from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import { FaRegEyeSlash } from "react-icons/fa";
import { interRegular, interSemiBold } from "../../Constants/fontStyles";

export const slideIn = keyframes`
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {  
    transform: translateX(100vw);
    opacity: 0;
  }
`;

export const SignUpContainer = styled.div`
  padding-bottom: 40px;

  animation: ${slideIn} 0.35s;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const SignUpSubContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const HeaderContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconContianer = styled(IoIosArrowRoundBack)`
  position: absolute;
`;

export const SignUpHeading = styled.h1`
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

export const FieldsContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  gap: 24px;
`;

export const InputField = styled.input`
  width: 90%;
  margin: auto;
  border: 1px solid #f1f1fa;
  height: 48px;
  border-radius: 16px;
  padding-left: 12px;
  font-size: 16px;

  ::placeholder {
    color: black;
  }
`;

export const InputFieldContainerWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const EyeIconContainer = styled(IoEyeOutline)`
  position: absolute;
  right: 30px;
  color: #91919f;

  @media screen and (min-width: 768px) {
    right: 8%;
  }
`;
interface GenderIconContainerProps {
  isactive: boolean;
}

export const GenderIconContainer = styled(
  IoIosArrowDown
)<GenderIconContainerProps>`
  opacity: 0.6;
  position: absolute; /* Change from fixed to absolute */
  right: 16px; /* Adjust position to right side */
  color: black;
  transition: transform 0.3s ease;
  transform: ${({ isactive }) =>
    isactive ? "rotate(180deg)" : "rotate(0deg)"};

  @media screen and (min-width: 768px) {
    right: 16px; /* Adjust as needed for larger screens */
  }
`;

export const GenderContainer = styled.div`
  width: 92%;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: auto;
  border: 1px solid #f1f1fa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  position: relative;
`;

export const ParaElement = styled.p`
  font-size: 16px;
  color: #91919f;
`;

export const GenderHeadingContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 8px;
`;

export const GenderContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// export const GenderButton = styled.button`
//   width: 95%;
//   background: none;
//   border: none;
//   text-align: left;
//   font-size: 16px;
//   color: #91919f;
//   border: 1px solid #afafaf;
//   margin: auto;
//   padding: 14px;
//   border-radius: 8px;
//   color: black;
// `;

// Update the GenderButton styled component to accept a prop for active selection
export const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 95%;
  background: ${(props) =>
    props.isSelected
      ? "#7F3DFF"
      : "none"}; // Change background for selected option
  border: none;
  text-align: left;
  font-size: 16px;
  color: ${(props) => (props.isSelected ? "white" : "#91919f")};
  border: 1px solid #afafaf;
  margin: auto;
  padding: 14px;
  border-radius: 8px;
`;

export const SignUpButton = styled(GlobalButton1)`
  width: 90%;
  margin: auto;
`;

export const HidePassword = styled(FaRegEyeSlash)`
  position: absolute;
  right: 30px;
  color: #91919f;

  @media screen and (min-width: 768px) {
    right: 8%;
  }
`;

export const AlreadyHaveAnAccout = styled.p`
  text-align: center;
  color: #91919f;
`;

export const LoginLink = styled(Link)`
  color: #7f3dff;
  text-decoration: none;
`;

export const RadioElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 90%;
  margin: auto;
`;

export const RadioElementsSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const GenderInput = styled.input``;

export const GenderLabel = styled.label`
  ${interRegular}
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #91919f;
`;
