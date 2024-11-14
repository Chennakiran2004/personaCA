// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// import { ChangingTokens } from "../../Constants/EventHandlers";

// const ProtectedRoute: React.FC = () => {
//   const { accessToken } = ChangingTokens();

//   if (accessToken === undefined) {
//     return <Navigate to="/signIn" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ChangingTokens } from "../../Constants/EventHandlers";

const ProtectedRoute: React.FC = () => {
  const { accessToken } = ChangingTokens();
  const isSalaryAdded = localStorage.getItem("isSalaryAdded");

  if (accessToken === undefined) {
    return <Navigate to="/Login" />;
  }

  // If salary is added, redirect away from AddNewAccount
  if (
    isSalaryAdded === "true" &&
    window.location.pathname === "/addNewAccount"
  ) {
    return <Navigate to="/home" />; // or any other route you prefer
  }

  return <Outlet />;
};

export default ProtectedRoute;
