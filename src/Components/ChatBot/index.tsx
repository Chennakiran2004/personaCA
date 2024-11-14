// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import { ChatBotMainContainer, ChatBotSubContainer,
// //     ChatWithHeading, Headings, NameHeading, TopContainerChatBot,
// //     TopContainerContents, IconsContainer, MainChatContainer,
// //     FromMessage, MainChatSubContainer,
// //     MessageElement, ToMessage, ToMessageElement, InputFieldContainer,
// //     InputElement, SendButton} from "./styledcomponents";

// import axios from "axios";
// import { BackButton, BottomContainer, ChatBotMainContainer, ChatBotMainSubContainer, ChatWithHeading, FromMessage, HeaderContents, HeaderTopContents, Headings, InputElementStyling, MainChatContainer, MainChatSubContainer, MessageElement, NameHeading, SendButton, SubmitButtonChat, ToMessage, ToMessageElement } from "./styledcomponents"
// import { useState, useRef } from "react";
// import { ChangingTokens, url } from "../../Constants/EventHandlers";
// import { handleAxiosError } from "../../Constants/errorHandler";

// // interface Message {
// //     text: string;
// //     fromUser: boolean;
// // }

// // const fromVariants = {
// //     hidden: { x: 50, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// // };

// // const toVariants = {
// //     hidden: { x: -50, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// // };

// // const ChatBot = () => {
// //     const [messages, setMessages] = useState<Message[]>([]);
// //     const [input, setInput] = useState<string>('');
// //     const messagesEndRef = useRef<HTMLDivElement>(null);
// //     const inputRef = useRef<HTMLInputElement>(null);

// //     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         setInput(event.target.value);
// //     };

// //     const sendMessage = () => {
// //         if (input.trim()) {
// //             const newMessage: Message = { text: input, fromUser: true };
// //             setMessages(prevMessages => [...prevMessages, newMessage]);
// //             const aiMessage: Message = { text: "Certainly! Let's put together the full React component code along with the animated styled components using Framer Motion for your chat application. Here is how you can structure and implement it:", fromUser: false };
// //             setMessages(prevMessages => [...prevMessages, aiMessage]);
// //             setInput('');
// //             if (inputRef.current) {
// //                 inputRef.current.blur();
// //             }
// //         }
// //     };

// //     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
// //         if (event.key === 'Enter') {
// //             sendMessage();
// //         }
// //     };

// //     useEffect(() => {
// //         if (messagesEndRef.current) {
// //             messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
// //         }
// //     }, [messages]);

// //     return (
// //         <ChatBotMainContainer>
// //             <ChatBotSubContainer>
// //                 <TopContainerChatBot>
// //                     <TopContainerContents>
// //                         <img src="/Images/profileSmallIcon.svg" alt="Profile Icon" />
// //                         <Headings>
// //                             <ChatWithHeading>Chat With</ChatWithHeading>
// //                             <NameHeading>Riya</NameHeading>
// //                         </Headings>
// //                         <IconsContainer>
// //                             <img src="/Images/deleteSession.svg" alt="Delete Session" />
// //                         </IconsContainer>
// //                     </TopContainerContents>
// //                 </TopContainerChatBot>
// //                 <MainChatContainer>
// //                     <MainChatSubContainer ref={messagesEndRef}>
// //                         {messages.map((message, index) => (
// //                             message.fromUser ?
// //                                 <FromMessage
// //                                     key={index}
// //                                     variants={fromVariants}
// //                                     initial="hidden"
// //                                     animate="visible"
// //                                 >
// //                                     <MessageElement>{message.text}</MessageElement>
// //                                 </FromMessage>
// //                                 :
// //                                 <ToMessage
// //                                     key={index}
// //                                     variants={toVariants}
// //                                     initial="hidden"
// //                                     animate="visible"
// //                                 >
// //                                     <ToMessageElement>{message.text}</ToMessageElement>
// //                                 </ToMessage>
// //                         ))}
// //                     </MainChatSubContainer>
// //                     <InputFieldContainer>
// //                         <InputElement
// //                             ref={inputRef}
// //                             value={input}
// //                             onChange={handleInputChange}
// //                             onKeyPress={handleKeyPress}
// //                             placeholder="Type a message to Riya ..."
// //                         />
// //                         <SendButton onClick={sendMessage}>
// //                             <img src="/Images/sendIcon.svg" alt="Send" />
// //                         </SendButton>
// //                     </InputFieldContainer>
// //                 </MainChatContainer>
// //             </ChatBotSubContainer>
// //         </ChatBotMainContainer>
// //     );
// // };

// // export default ChatBot;

// interface Message {
//     text: string;
//     fromUser: boolean;
// }

// const fromVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// };

// const toVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// };

// const ChatBot = ()=>{
//         const [messages, setMessages] = useState<Message[]>([]);
//     const [input, setInput] = useState<string>('');
//     const messagesEndRef = useRef<HTMLDivElement>(null);
//     const inputRef = useRef<HTMLInputElement>(null);

//     const { accessToken} = ChangingTokens();

//     const sendMessage = () => {
//                 if (input.trim()) {
//                     const newMessage: Message = { text: input, fromUser: true };
//                     setMessages(prevMessages => [...prevMessages, newMessage]);
//                     //send request
//                     const fetching = async()=>{
//                         try{
//                             const body = {
//                                 message: input
//                             }
//                             const response = await axios.post(`${url}/generate_personalized_response/`, body, {
//                                 headers: {
//                                   Authorization: `Bearer ${accessToken}`,
//                                 },
//                               });
//                               console.log(response)
//                               const aiMessage: Message = { text: response.data.response, fromUser: false };
//                             setMessages(prevMessages => [...prevMessages, aiMessage]);
//                             setInput('');
//                             if (inputRef.current) {
//                                 inputRef.current.blur();
//                             }

//                         }catch(e){
//                             handleAxiosError(e)
//                         }
//                     }

//                     fetching()
//                 }
//         };

//             const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//                 setInput(event.target.value);
//             };

//             const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//                     if (event.key === 'Enter') {
//                         sendMessage();
//                     }
//             };

//     return(
//         <ChatBotMainContainer>
//             <ChatBotMainSubContainer>
//                 <HeaderTopContents>
//                         <BackButton/>
//                         <Headings>
//                             <img src = "/Images/profileSmallIcon.svg"/>
//                             <HeaderContents>
//                                 <ChatWithHeading>Chat With</ChatWithHeading>
//                                 <NameHeading>Riya</NameHeading>
//                             </HeaderContents>
//                         </Headings>
//                         <img src = "/Images/deleteSessionIcon.svg"/>
//                 </HeaderTopContents>
//                 <MainChatContainer>
//                     <MainChatSubContainer>
//                     {messages.map((message, index) => (
//                             message.fromUser ?
//                                 <FromMessage
//                                     key={index}
//                                     variants={fromVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     <MessageElement>{message.text}</MessageElement>
//                                 </FromMessage>
//                                 :
//                                 <ToMessage
//                                     key={index}
//                                     variants={toVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     <ToMessageElement>{message.text}</ToMessageElement>
//                                 </ToMessage>
//                         ))}
//                     </MainChatSubContainer>
//                 </MainChatContainer>
//                 <BottomContainer>
//                         <InputElementStyling onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder="Type a message to Riya..."/>
//                         <SendButton onClick={sendMessage}></SendButton>
//                 </BottomContainer>
//             </ChatBotMainSubContainer>
//         </ChatBotMainContainer>
//     )
// }

// export default ChatBot

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// interface Message {
//   text: string;
//   sender: "user" | "bot";
// }

// const InputComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState(""); // Track user input
//   const [isFocused, setIsFocused] = useState(false); // Track input focus

//   // Update the viewport height CSS variable dynamically
//   const updateViewportHeight = () => {
//     document.documentElement.style.setProperty(
//       "--vh",
//       `${window.innerHeight * 0.01}px`
//     );
//   };

//   useEffect(() => {
//     updateViewportHeight(); // Initial update on mount
//     window.addEventListener("resize", updateViewportHeight); // Update on resize

//     // Clean up on unmount
//     return () => window.removeEventListener("resize", updateViewportHeight);
//   }, []);

//   const handleFocus = () => {
//     setIsFocused(true);
//     document.body.classList.add("no-scroll");
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     document.body.classList.remove("no-scroll");
//   };

//   // Simulate a bot response
//   const generateBotResponse = (userMessage: string): string => {
//     return `You said: "${userMessage}", here's my response!`;
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (input.trim() === "") return;

//     // Add user's message to messages array
//     const userMessage: Message = { text: input, sender: "user" };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     // Generate bot response and add to messages array
//     const botMessage: Message = {
//       text: generateBotResponse(input),
//       sender: "bot",
//     };

//     setTimeout(() => {
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     }, 500); // Simulate response delay

//     setInput(""); // Clear input field
//   };

//   return (
//     <ChatContainer isFocused={isFocused}>
//       <MessagesContainer>
//         {messages.map((message, index) => (
//           <MessageBubble key={index} sender={message.sender}>
//             {message.text}
//           </MessageBubble>
//         ))}
//       </MessagesContainer>
//       <Form onSubmit={handleSubmit}>
//         <StyledInput
//           type="text"
//           placeholder="Type a message..."
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//         />
//         <SendButton type="submit"></SendButton>
//       </Form>
//     </ChatContainer>
//   );
// };

// export default InputComponent;

// const ChatContainer = styled.div<{ isFocused: boolean }>`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   max-width: 768px;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   height: ${(props) =>
//     props.isFocused ? "auto" : "calc(var(--vh, 1vh) * 100)"};
//   overflow: hidden; /* Prevents resizing when keyboard opens */

//   @media (min-width: 768px) {
//     position: relative;
//     max-width: 768px;
//     max-height: 72vh;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//     border-radius: 16px;
//     padding: 16px;
//   }
// `;

// const MessagesContainer = styled.div`
//   flex: 1;
//   padding: 10px;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   scrollbar-width: none;
//   margin-bottom: 60px; /* Space for the fixed input area */
// `;

// const MessageBubble = styled.div<{ sender: "user" | "bot" }>`
//   align-self: ${(props) =>
//     props.sender === "user" ? "flex-end" : "flex-start"};
//   background-color: ${(props) =>
//     props.sender === "user" ? "#DCF8C6" : "#eee"};
//   color: #333;
//   padding: 10px;
//   border-radius: 8px;
//   margin: 5px 0;
//   max-width: 80%;
// `;

// const Form = styled.form`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   max-width: 768px;
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   border-top: 1px solid #ddd;
//   background-color: white;
//   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
//   @media(min-width: 768px){
//     position: relative;
//     max-width: 768px;
//   }
// `;

// const StyledInput = styled.input`
//   flex: 1;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
// `;

// const SendButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   margin-left: 5px;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   width: 48px;
//     height: 48px;
//     border: none;
//     background: url('/Images/sendIcon.svg') no-repeat center;
//     background-size: contain;
//     margin-right: 16px;
// `;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  BackButton,
  CancelChatButton,
  ChatWithHeading,
  Cross,
  EndChatButton,
  EndChatSubContainer,
  HeaderContents,
  HeaderTopContents,
  Headings,
  NameHeading,
  NameHeadingRiya,
  ParaEndChat,
  RiyaPic,
  RiyaProfileImage,
} from "./styledcomponents";
import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { handleAxiosError } from "../../Constants/errorHandler";
import ThreeDotsWave from "../ThreeDotsWave";
import { AnimatePresence } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";
import { FeedbackPopupContainer } from "../Profile/styledComponents";
import { Overlay, PopUpSubContainer } from "../Transaction/styledComponents";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const popupVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100%" },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const InputComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState(""); // Track user input
  const [isFocused, setIsFocused] = useState(false); // Track input focus
  const [loading, setLoading] = useState(false); // Track loading state for bot response
  const [isSessionClose, setIsSessionClose] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to the end of the messages container
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to hold timer
  const [tooMuch, setTooMuchTime] = useState(false);

  const { navigateToHome } = NavigationEvents();

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();

  const { handleBack } = NavigationEvents();

  // Update the viewport height CSS variable dynamically
  const updateViewportHeight = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  };

  useEffect(() => {
    updateViewportHeight(); // Initial update on mount
    window.addEventListener("resize", updateViewportHeight); // Update on resize

    // Clean up on unmount
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to the latest message whenever messages change
  }, [messages]);

  const handleFocus = () => {
    setIsFocused(true);
    document.body.classList.add("no-scroll");
  };

  const handleBlur = () => {
    setIsFocused(false);
    document.body.classList.remove("no-scroll");
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const timeoutMessage: Message = {
        text: "This has taken too long; please try again later.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, timeoutMessage]);
      setTooMuchTime(true);
      setLoading(false);
    }, 2.5 * 60 * 1000);
  };

  // Simulate a bot response
  const generateBotResponse = async (userMessage: string) => {
    try {
      const body = {
        message: input,
      };
      const response = await axios.post(
        `${url}/generate_personalized_response/`,
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data.response);
      return response.data.response;
    } catch (e: any) {
      if (e.response && e.response.status === 400) {
        return `Offensive language detected: "${userMessage}"`;
      } else {
        handleAxiosError(e); // Handle other errors
      }
      return Promise.reject(e);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim() === "" || loading) return;

    setInput(""); // Clear input field
    setLoading(true); // Set loading to true while waiting for bot response
    startTimer(); // Start the 2.5-minute timer when fetching begins

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const data = await generateBotResponse(input);
      const botMessage: Message = {
        text: data,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Stop loading after receiving bot response
      if (timerRef.current) clearTimeout(timerRef.current); // Clear timer if response is received in time
    }
  };

  const handleSessionClose = () => {
    setIsSessionClose(false);
    if (timerRef.current) clearTimeout(timerRef.current); // Clear timer when session closes
  };

  return (
    <>
      <ChatContainer>
        <HeaderTopContents>
          <BackButton onClick={() => setIsSessionClose(true)} />
          <Headings>
            <RiyaProfileImage src="/Images/riyaImage.svg" />
            <HeaderContents>
              <ChatWithHeading>Chat With</ChatWithHeading>
              <NameHeading>Riya</NameHeading>
            </HeaderContents>
          </Headings>
          <Cross
            onClick={() => setIsSessionClose(true)}
            src="/Images/cross.svg"
          />
        </HeaderTopContents>
        <MessagesContainer isFocused={isFocused}>
          {messages.map((message, index) => (
            <MessageBubble key={index} sender={message.sender}>
              {message.text}
            </MessageBubble>
          ))}
          {loading && <WrapperDots color="#d1cfcf" height="40" width="40" />}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        <Form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Type a message to Riya..."
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <SendButton type="submit" disabled={loading} />
        </Form>
      </ChatContainer>
      <AnimatePresence mode="wait">
        {isSessionClose && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleSessionClose}
          >
            <FeedbackPopupContainer
              onClick={(e) => e.stopPropagation()}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PopUpSubContainer>
                <EndChatSubContainer>
                  <RiyaPic src="/Images/womanImageRiya.svg" />
                  <ParaEndChat>
                    Are you sure you want to end the session with{" "}
                    <NameHeadingRiya>Riya</NameHeadingRiya>
                  </ParaEndChat>
                  <EndChatButton onClick={navigateToHome}>
                    End Chat
                  </EndChatButton>
                  <CancelChatButton onClick={handleSessionClose}>
                    Cancel
                  </CancelChatButton>
                </EndChatSubContainer>
              </PopUpSubContainer>
            </FeedbackPopupContainer>
          </Overlay>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {tooMuch && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FeedbackPopupContainer
              onClick={(e) => e.stopPropagation()}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PopUpSubContainer>
                <EndChatSubContainer>
                  <RiyaPic src="/Images/womanImageRiya.svg" />
                  <ParaEndChat>
                    This has taken too long please try again later{" "}
                  </ParaEndChat>
                  <EndChatButton onClick={navigateToHome}>
                    End Chat
                  </EndChatButton>
                </EndChatSubContainer>
              </PopUpSubContainer>
            </FeedbackPopupContainer>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default InputComponent;

// Styled Components
const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;

  @media (min-width: 768px) {
    position: relative;
    max-width: 768px;
    height: 72vh;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

const MessagesContainer = styled.div<{ isFocused: boolean }>`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  height: ${(props) =>
    props.isFocused ? "auto" : "calc(var(--vh, 1vh) * 100)"};
  margin-bottom: 60px;
  margin-top: 40px;
  gap: 16px;
`;

const MessageBubble = styled.div<{ sender: "user" | "bot" }>`
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${(props) =>
    props.sender === "user" ? "#7F3DFF" : "#F5F5F5"};
  color: ${(props) => (props.sender === "user" ? "white" : "black")};
  border-radius: 12px;
  border-top-left-radius: ${(props) => (props.sender === "bot" && "0px")};
  border-bottom-right-radius: ${(props) => (props.sender === "user" && "0px")};
  

  text-align: ${(props) => (props.sender === "user" ? "left" : "left")};
  padding: 12px;
  margin: 5px 0;
  font-size: 18px;
  max-width: 80%;
`;

const Form = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) {
    position: relative;
    max-width: 768px;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 16px;
  border-radius: 12px;
  outline: none;
  margin: 8px 16px;
  background-color: #FAFAFA;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 16px;
  outline: none;

  &:focus{
    border: 1px solid #7F3DFF
  }

  
`;

const SendButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: url("/Images/sendIcon.svg") no-repeat center;
  background-size: contain;
  margin-right: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const WrapperDots = styled(ThreeDots)`
  display: block;
  margin-left: 1600px !important;
  width: auto;
`;
