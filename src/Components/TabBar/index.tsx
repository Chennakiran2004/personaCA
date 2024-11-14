import { useEffect, useState } from "react";
import {
  AddButtonContainer,
  CustomLink,
  TabBarItemContainer,
  TabBarItemImage,
  TabBarItemText,
  TabBarMainContainer,
  TabBarSubContainer,
  TabBarContainer,
  BotImage,
} from "./styledComponents";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { NavigationEvents } from "../../Constants/EventHandlers";

const TabBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/home");
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const getIconColor = (tab: any) =>
    tab === activeTab ? "#7F3DFF" : "#C6C6C6";
  const getTextColor = (tab: any) =>
    tab === activeTab ? "#7F3DFF" : "#C6C6C6";

  const {navigateToBot} = NavigationEvents()

  return (
    <TabBarMainContainer>
      <TabBarSubContainer>
        <CustomLink to="/home" onClick={() => handleTabClick("/home")}>
          <TabBarItemContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.6703 9.55956L21.6703 7.73956L14.0003 0.779557C13.4502 0.287602 12.7382 0.015625 12.0003 0.015625C11.2623 0.015625 10.5503 0.287602 10.0003 0.779557L2.35026 7.77956L0.350263 9.59956C0.215588 9.73621 0.123067 9.90872 0.0837369 10.0965C0.0444067 10.2843 0.0599278 10.4794 0.128449 10.6586C0.196969 10.8378 0.315597 10.9936 0.47018 11.1072C0.624762 11.2208 0.808774 11.2876 1.00026 11.2996C1.25355 11.2881 1.49304 11.1809 1.67026 10.9996L2.00026 10.6996V20.9996C2.00026 21.7952 2.31633 22.5583 2.87894 23.1209C3.44155 23.6835 4.20461 23.9996 5.00026 23.9996H19.0003C19.7959 23.9996 20.559 23.6835 21.1216 23.1209C21.6842 22.5583 22.0003 21.7952 22.0003 20.9996V10.7396L22.3303 11.0396C22.5137 11.2063 22.7524 11.2989 23.0003 11.2996C23.2019 11.299 23.3986 11.2376 23.5647 11.1232C23.7308 11.0089 23.8584 10.8471 23.9309 10.6589C24.0033 10.4707 24.0172 10.2651 23.9707 10.0689C23.9242 9.87271 23.8195 9.69517 23.6703 9.55956Z"
                fill={getIconColor("/home")}
              />
            </svg>
            <TabBarItemText style={{ color: getTextColor("/home") }}>
              Home
            </TabBarItemText>
          </TabBarItemContainer>
        </CustomLink>
        <CustomLink
          to="/transaction"
          onClick={() => handleTabClick("/transaction")}
        >
          <TabBarItemContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
            >
              <path
                d="M18.1296 12.9313V13.9313C18.1296 14.5879 18.0003 15.2381 17.749 15.8447C17.4977 16.4514 17.1294 17.0026 16.6651 17.4668C16.2008 17.9311 15.6496 18.2994 15.043 18.5507C14.4364 18.802 13.7862 18.9313 13.1296 18.9313H9.86959C9.85416 19.4782 9.68948 20.0104 9.39337 20.4705C9.09726 20.9305 8.68098 21.3008 8.18958 21.5413C7.77975 21.7461 7.32773 21.8522 6.86959 21.8513C6.19185 21.8553 5.53273 21.6298 4.99959 21.2113L1.28959 18.3013C0.928253 18.0209 0.635825 17.6616 0.434657 17.2508C0.233488 16.84 0.128906 16.3887 0.128906 15.9313C0.128906 15.4739 0.233488 15.0226 0.434657 14.6118C0.635825 14.2011 0.928253 13.8417 1.28959 13.5613L4.99959 10.6513C5.44658 10.2946 5.98624 10.073 6.55496 10.0128C7.12368 9.95254 7.69777 10.0561 8.20959 10.3113C8.89111 10.6373 9.41598 11.2197 9.66959 11.9313H17.0996C17.2334 11.9273 17.3667 11.9502 17.4915 11.9986C17.6163 12.0471 17.7301 12.1201 17.8262 12.2134C17.9222 12.3066 17.9986 12.4182 18.0507 12.5416C18.1028 12.6649 18.1296 12.7974 18.1296 12.9313Z"
                fill={getIconColor("/transaction")}
              />
              <path
                d="M27.8711 6.07142C27.8712 6.52874 27.7667 6.98004 27.5656 7.3908C27.3646 7.80156 27.0723 8.16092 26.7111 8.44142L23.0011 11.3514C22.4605 11.7715 21.7957 12.0001 21.1111 12.0014C20.653 12.0023 20.2009 11.8962 19.7911 11.6914C19.1096 11.3654 18.5847 10.7831 18.3311 10.0714H10.8711C10.6059 10.0714 10.3515 9.96606 10.164 9.77853C9.97645 9.59099 9.87109 9.33663 9.87109 9.07142V8.07142C9.87109 6.74534 10.3979 5.47357 11.3356 4.53588C12.2732 3.5982 13.545 3.07142 14.8711 3.07142H18.1311C18.1433 2.51237 18.3114 1.96785 18.6166 1.4993C18.9219 1.03076 19.3519 0.656837 19.8584 0.419741C20.3648 0.182645 20.9274 0.0918084 21.4827 0.157483C22.038 0.223158 22.5639 0.442729 23.0011 0.791418L26.7111 3.70142C27.0723 3.98191 27.3646 4.34127 27.5656 4.75204C27.7667 5.1628 27.8712 5.61409 27.8711 6.07142Z"
                fill={getIconColor("/transaction")}
              />
            </svg>
            <TabBarItemText style={{ color: getTextColor("/transaction") }}>
              Transaction
            </TabBarItemText>
          </TabBarItemContainer>
        </CustomLink>

        {/* <CustomLink to="/budget" onClick={() => handleTabClick("/budget")}>
          <TabBarItemContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M24 11H13V0C15.8412 0.228368 18.5083 1.46063 20.5239 3.47614C22.5394 5.49166 23.7716 8.1588 24 11Z"
                fill={getIconColor("/budget")}
              />
              <path
                d="M24.0012 13C23.8022 15.2756 22.9578 17.4471 21.5672 19.2594C20.1767 21.0716 18.2977 22.4493 16.1512 23.2306C14.0047 24.0119 11.6798 24.1643 9.44966 23.6699C7.21952 23.1755 5.17683 22.0549 3.5616 20.4396C1.94637 18.8244 0.825711 16.7817 0.331313 14.5516C-0.163085 12.3214 -0.0106853 9.99652 0.770604 7.85001C1.55189 5.7035 2.92961 3.82457 4.74188 2.43401C6.55414 1.04346 8.72564 0.199045 11.0012 0V12C11.0012 12.2652 11.1066 12.5196 11.2941 12.7071C11.4817 12.8946 11.736 13 12.0012 13H24.0012Z"
                fill={getIconColor("/budget")}
              />
            </svg>
            <TabBarItemText style={{ color: getTextColor("/budget") }}>
              Budget
            </TabBarItemText>
          </TabBarItemContainer>
        </CustomLink> */}
        <CustomLink to="/profile" onClick={() => handleTabClick("/profile")}>
          <TabBarItemContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M10 12.0703C13.3137 12.0703 16 9.38402 16 6.07031C16 2.7566 13.3137 0.0703125 10 0.0703125C6.68629 0.0703125 4 2.7566 4 6.07031C4 9.38402 6.68629 12.0703 10 12.0703Z"
                fill={getIconColor("/profile")}
              />
              <path
                d="M13 14H7C5.14348 14 3.36301 14.7375 2.05025 16.0503C0.737498 17.363 0 19.1435 0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21C20 19.1435 19.2625 17.363 17.9497 16.0503C16.637 14.7375 14.8565 14 13 14Z"
                fill={getIconColor("/profile")}
              />
            </svg>
            <TabBarItemText style={{ color: getTextColor("/profile") }}>
              Profile
            </TabBarItemText>
          </TabBarItemContainer>
        </CustomLink>
      <BotImage  onClick = {navigateToBot} alt = "Riya Evvaru?" src = "/Images/Hello Robot.gif"/>

      </TabBarSubContainer>
    </TabBarMainContainer>
  );
};

export default TabBar;
