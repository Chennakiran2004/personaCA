import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ChangingTokens } from "./EventHandlers";

const withAuthRedirect = (WrappedComponent: any) => {
  return (props: any) => {
    const navigate = useNavigate();

    useEffect(() => {
      const { accessToken } = ChangingTokens(); // or sessionStorage.getItem('token')

      if (accessToken) {
        navigate("/home"); // Redirect to home if a token exists
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
