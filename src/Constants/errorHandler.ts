import { ChangingTokens, NavigationEvents } from "./EventHandlers";
// const { deleteAccessToken, deleteRefereshToken } = ChangingTokens();
//     const { navigateLogin } = NavigationEvents();
export const handleAxiosError = (error: any) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error("Bad Request:", error.message);
        break;
      case 401:
        // deleteAccessToken();
        // deleteRefereshToken();
        // navigateLogin();
        break;

      case 500:
        console.error("Server Error:", error.message);
        break;
      default:
        console.error("Unhandled Error:", error.message);
        break;
    }
  } else {
    console.error("Unknown Error:", error.message);
  }
};
