// import styled from "styled-components";
// import { motion } from 'framer-motion';

// export const ChatBotMainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: 85dvh;
//     margin: auto;
//     @media screen and (min-width: 768px) {
//         width: 768px;
//         margin: auto;
//         height: 72vh;
//         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//         border-radius: 16px;
//     }
// `

// export const ChatBotSubContainer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
// `;

// export const TopContainerChatBot = styled.div`
//     background-color: #f1f1f1;
//     z-index: 10;
//     padding: 16px;
//     border-radius: 0px 0px 16px 16px;
//     background: #7F3DFF;
//     @media (min-width: 768px){
//         border-radius: 16px 16px 0px 0px;
//     }
// `;

// export const TopContainerContents = styled.div`
//     width: 90%;
//     margin: auto;
//     display: flex;
//     align-items: center;
//     gap: 16px;
// `

// export const Headings = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     gap: 8px;
// `

// export const ChatWithHeading = styled.p`
//     color: white;
//     text-align: left;
// `

// export const NameHeading = styled.p`
//     color: white;
//     text-align: left;
// `

// export const IconsContainer = styled.div``

// export const MainChatContainer = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     position: relative;
// `

// export const MainChatSubContainer = styled.div`
//     width: 90%;
//     // margin: auto;
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: 16px;
//     height: fit-content;
//     max-height: calc(100% - 70px);
//     overflow-y: scroll;
//     overflow-x: hidden;
//     position: relative;
//     padding-bottom: 50px;
//     scrollbar-width: none;
//     @media (min-width: 768px){
//         padding-bottom: 100px;
//         max-height: 50%;
//     }
// `

// export const FromMessage = styled(motion.div)`
//     max-width: 50%;
//     display: inline-flex;
//     padding: 12px;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     border-radius: 12px 12px 0px 12px;
//     background: #7F3DFF;
//     align-self: flex-end;
// `

// export const MessageElement = styled.p`
//     color: white;
//     text-align: left;
// `

// export const ToMessage = styled(motion.div)`
//     display: inline-flex;
//     padding: 12px;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     border-radius: 0px 12px 12px 12px;
//     background: #F5F5F5;
//     max-width: 70%;
//     align-self: flex-start;
// `

// export const ToMessageElement = styled(MessageElement)`
//     color: black;
// `

// export const InputFieldContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     background: white;
//     align-self: flex-end;
//     gap: 6px;
//     padding-left: 16px;
// `

// export const InputElement = styled.input`
//     flex-grow: 1;
//     border-radius: 12px;
//     background: #FAFAFA;
//     padding: 16px;
//     border: none;
//     margin-left: 4px;
// `

// export const SendButton = styled.button`
//     width: 48px;
//     height: 48px;
//     border: none;
//     background: url('/Images/sendIcon.svg') no-repeat center;
//     background-size: contain;
//     padding: 0;
//     margin-right: 4px;
// `

import styled from "styled-components";
import { IconContianer } from "../signup/signupstyled";
import { motion } from "framer-motion";
import {
  interBold,
  interMedium,
  interRegular,
} from "../../Constants/fontStyles";
import {
  GlobalButton1,
  GlobalButton2,
} from "../GainTotalControlOfYourMoney/styledComponents";

export const ChatBotMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90dvh;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    height: 72dvh;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const ChatBotMainSubContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderTopContents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 16px 16px;
  background: #7f3dff;
  display: flex;
  height: 83px;
  padding: 0px 16px;
  align-items: center;
`;

export const BackButton = styled(IconContianer)`
  color: white;
  font-size: 32px;
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-left: 48px;
`;

export const ChatWithHeading = styled.p`
  color: white;
  text-align: left;
`;

export const NameHeading = styled.p`
  color: white;
  text-align: left;
  ${interMedium}
  font-size: 20px;
`;

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RiyaProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 90%; /* Ensures BottomContainer takes full width */
  display: flex;
  align-items: center;
  padding: 18px;
  gap: 8px;
  background: white;
  margin: auto;
`;

export const InputElementStyling = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #fafafa;
`;

export const SubmitButtonChat = styled.button``;

export const SendButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: url("/Images/sendIcon.svg") no-repeat center;
  background-size: contain;
  padding: 0;
  margin-right: 4px;
`;

export const MainChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const MessageElement = styled.p`
  color: white;
  text-align: left;
`;

export const FromMessage = styled(motion.div)`
  max-width: 50%;
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px 12px 0px 12px;
  background: #7f3dff;
  align-self: flex-end;
`;

export const ToMessageElement = styled(MessageElement)`
  color: black;
`;

export const ToMessage = styled(motion.div)`
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 0px 12px 12px 12px;
  background: #f5f5f5;
  max-width: 70%;
  align-self: flex-start;
`;

export const MainChatSubContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  height: fit-content;
  max-height: calc(100% - 70px);
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 50px;
  scrollbar-width: none;
  @media (min-width: 768px) {
    padding-bottom: 100px;
    max-height: 50%;
  }
`;

export const EndChatSubContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const RiyaPic = styled.img`
  width: 100px;
  height: 100px;
`;

export const ParaEndChat = styled.p`
  ${interRegular}
  font-size: 16px;
`;

export const NameHeadingRiya = styled.span`
  ${interMedium}
  font-size: 20px;
`;

export const EndChatButton = styled(GlobalButton1)`
  height: 45px;
`;

export const CancelChatButton = styled(GlobalButton2)`
  height: 45px;
`;

export const Cross = styled.img`
  width: 15px;
  height: 15px;
`;
