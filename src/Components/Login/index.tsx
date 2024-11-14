import {
  SignUpContainer,
  SignUpSubContainer,
  HeaderContainer,
  IconContianer,
  SignUpHeading,
  FieldsContainer,
  InputField,
  InputFieldContainerWrapper,
  EyeIconContainer,
  SignUpButton,
  HidePassword,
  AlreadyHaveAnAccout,
  LoginLink,
} from "./loginstyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ChangeEvents,
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import withAuthRedirect from "../../Constants/WithAuthRedirect";

// const dropdownVariants = {
//   hidden: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
//   visible: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.2,
//     },
//   },
//   exit: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

const Login = () => {
  const navigate = useNavigate();
  const { setAccessToken, setRefreshToken } = ChangingTokens();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState<String | undefined>(undefined);

  const { changePassword } = ChangeEvents();
  const { navigateSignIn } = NavigationEvents();

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      const fetching = async () => {
        try {
          const data = {
            email: email,
            password: password,
          };
          const response = await axios.post(
            `${url}/user_account/login/v1`,
            data
          );
          setAccessToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token);
          navigate("/home");
        } catch (err: any) {
          if (err.response) {
            if (err.response.data.error_message) {
              setError(err.response.data.error_message);
            } else {
              switch (err.response.status) {
                case 400:
                  setError(err.response.data.error_message);
                  break;
                case 401:
                  setError("Unauthorized. Please check your credentials.");
                  break;
                case 404:
                  setError("Not found. The URL may be incorrect.");
                  break;
                case 500:
                  setError("Internal server error. Please try again later.");
                  break;
                default:
                  setError("An unexpected error occurred. Please try again.");
              }
            }
          } else if (err.request) {
            setError("Network error. Please check your connection.");
          } else {
            setError("An error occurred. Please try again.");
          }
        }
      };
      fetching();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.2 }} */}
      <SignUpContainer>
        <SignUpSubContainer>
          <HeaderContainer>
            <IconContianer onClick={navigateSignIn} size={40} />
            <SignUpHeading>Login</SignUpHeading>
          </HeaderContainer>
          <FieldsContainer
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputField
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldContainerWrapper>
              <InputField
                placeholder="Password"
                type={isPassword ? "password" : "text"}
                onChange={(e) => setPassword(changePassword(e))}
                value={password}
              />
              {isPassword ? (
                <EyeIconContainer
                  onClick={() => setIsPassword(false)}
                  size={24}
                />
              ) : (
                <HidePassword onClick={() => setIsPassword(true)} size={24} />
              )}
            </InputFieldContainerWrapper>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <SignUpButton type="submit" onClick={submitForm}>
              Login
            </SignUpButton>
            <AlreadyHaveAnAccout>
              Don’t have an account yet?{" "}
              <LoginLink to="/Signup">Sign Up</LoginLink>
            </AlreadyHaveAnAccout>
          </FieldsContainer>
        </SignUpSubContainer>
      </SignUpContainer>
    </AnimatePresence>
  );
};

export default withAuthRedirect(Login);
