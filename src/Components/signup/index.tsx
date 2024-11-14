import React, { useState } from "react";
import zxcvbn from "zxcvbn";
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
  GenderIconContainer,
  GenderContainer,
  ParaElement,
  GenderHeadingContainer,
  GenderContents,
  GenderButton,
  SignUpButton,
  HidePassword,
  AlreadyHaveAnAccout,
  LoginLink,
} from "./signupstyled";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ChangeEvents,
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { motion } from "framer-motion";
import axios from "axios";
import withAuthRedirect from "../../Constants/WithAuthRedirect";
import styled from "styled-components";
import { handleAxiosError } from "../../Constants/errorHandler";

// Styled Components for Password Strength Meter
const StrengthMeterContainer = styled.div`
  height: 8px;
  width: 24%;
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  margin-top: 8px;
`;

const StrengthMeterBar = styled.div<{ strength: number }>`
  height: 100%;
  width: ${(props) => (props.strength + 1) * 20}%;
  background: ${(props) =>
    props.strength === 0
      ? "#ff4d4f"
      : props.strength === 1
      ? "#ff7a45"
      : props.strength === 2
      ? "#ffec3d"
      : props.strength === 3
      ? "#73d13d"
      : "#52c41a"};
  transition: width 0.3s ease;
`;

const StrengthLabel = styled.p<{ strength: number }>`
  font-size: 14px;
  margin-top: 8px;
  text-align: left;
  padding-left: 6%;
  font-weight: bold;
  color: #ff4d4f;
  text-align: center;
  width: 90%;
  color: ${(props) =>
    props.strength === 0
      ? "#ff4d4f"
      : props.strength === 1
      ? "#ff7a45"
      : props.strength === 2
      ? "#ffec3d"
      : props.strength === 3
      ? "#73d13d"
      : "#52c41a"};
`;

// Strength labels
const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [genderContents, setGenderContents] = useState(false);
  const [roleContents, setRoleContents] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const [gender, setGender] = useState("Gender");
  const [role, setRole] = useState("Role");
  const [error, setError] = useState<string | undefined>(undefined);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const { changePassword } = ChangeEvents();
  const { handleBack } = NavigationEvents();
  const { setAccessToken, setRefreshToken } = ChangingTokens();
  const [isError, setIsError] = useState(true);

  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password strength checker
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue) {
      const passwordEval = zxcvbn(passwordValue);
      setPasswordStrength(passwordEval.score);
    } else {
      setPasswordStrength(0);
    }
  };

  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
    setRoleContents(false);
  };

  const openRolesDropDown = () => {
    setRoleContents(!roleContents);
    setGenderContents(false);
  };

  // const submitForm = () => {
  //   setNameError(false);
  //   setEmailError(false);
  //   setEmailFormatError(false);
  //   setPasswordError(false);
  //   setUsernameError(false);
  //   setGenderError(false);
  //   setRoleError(false);

  //   let hasError = false;

  //   if (name === "") {
  //     console.log("asdf");
  //     setNameError(true);
  //     hasError = true;
  //   }
  //   if (email === "") {
  //     setEmailError(true);
  //     hasError = true;
  //   } else if (!emailRegex.test(email)) {
  //     console.log("asdf");
  //     setEmailFormatError(true);
  //     hasError = true;
  //   }
  //   if (password === "") {
  //     console.log("asdf");
  //     setPasswordError(true);
  //     hasError = true;
  //   }
  //   if (username === "") {
  //     console.log("asdf");
  //     setUsernameError(true);
  //     hasError = true;
  //   }
  //   if (gender === "Gender") {
  //     setGenderError(true);
  //     hasError = true;
  //   }
  //   if (role === "Role") {
  //     setRoleError(true);
  //     hasError = true;
  //   }

  //   if (!hasError) {
  //     const fetching = async () => {
  //       try {
  //         const data = {
  //           username: username,
  //           email: email,
  //           password: password,
  //           full_name: name,
  //           role: role,
  //           gender: gender,
  //         };

  //         console.log(data);
  //         const response = await axios.post(
  //           `${url}/user_account/signup/v1`,
  //           data
  //         );
  //         setAccessToken(response.data.access_token);
  //         setRefreshToken(response.data.refresh_token);
  //         console.log(response.data);
  //       } catch (err: any) {
  //         if (err.response) {
  //           if (err.response.data.error_message) {
  //             setError(err.response.data.error_message);
  //           } else {
  //             switch (err.response.status) {
  //               case 400:
  //                 setError(err.response.data.error_message);
  //                 break;
  //               case 401:
  //                 setError("Unauthorized. Please check your credentials.");
  //                 break;
  //               case 404:
  //                 setError("Not found. The URL may be incorrect.");
  //                 break;
  //               case 500:
  //                 setError("Internal server error. Please try again later.");
  //                 break;
  //               default:
  //                 setError("An unexpected error occurred. Please try again.");
  //             }
  //           }
  //         } else if (err.request) {
  //           setError("Network error. Please check your connection.");
  //         } else {
  //           setError("An error occurred. Please try again.");
  //         }
  //         // handleAxiosError(err)
  //       }
  //     };
  //     fetching();
  //     // Navigate to the setup page after successful signup
  //     if (!isError) {
  //       navigate("/Setup");
  //       console.log(isError);
  //     }
  //   } else {
  //     setError("Please fill all the fields correctly");
  //   }
  //   setIsError(false);
  // };

  const submitForm = () => {
    setNameError(false);
    setEmailError(false);
    setEmailFormatError(false);
    setPasswordError(false);
    setUsernameError(false);
    setGenderError(false);
    setRoleError(false);

    let hasError = false;

    if (name === "") {
      setNameError(true);
      hasError = true;
    }
    if (email === "") {
      setEmailError(true);
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailFormatError(true);
      hasError = true;
    }
    if (password === "") {
      setPasswordError(true);
      hasError = true;
    }
    if (username === "") {
      setUsernameError(true);
      hasError = true;
    }
    if (gender === "Gender") {
      setGenderError(true);
      hasError = true;
    }
    if (role === "Role") {
      setRoleError(true);
      hasError = true;
    }

    if (!hasError) {
      const fetching = async () => {
        try {
          const data = {
            username,
            email,
            password,
            full_name: name,
            role,
            gender,
          };

          const response = await axios.post(
            `${url}/user_account/signup/v1`,
            data
          );

          setAccessToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token);
          navigate("/Setup");
        } catch (err: any) {
          if (err.response && err.response.data.error_message) {
            setError(err.response.data.error_message);
          } else {
            handleAxiosError(err);
          }
        }
      };
      fetching();
    } else {
      setError("Please fill all the fields correctly");
      setIsError(true); // Explicitly set this only when there’s an error
    }
  };

  return (
    <SignUpContainer>
      <SignUpSubContainer>
        <HeaderContainer>
          <IconContianer onClick={handleBack} size={40} />
          <SignUpHeading>Sign Up</SignUpHeading>
        </HeaderContainer>
        <FieldsContainer
          onSubmit={(e) => {
            e.preventDefault();
            setGenderContents(false);
          }}
        >
          <div>
            <InputField
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Name is required
              </p>
            )}
          </div>
          <div>
            <InputField
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Username is required
              </p>
            )}
          </div>

          <div>
            <InputField
              placeholder="name@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Email is required
              </p>
            )}
            {emailFormatError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Please enter a valid email
              </p>
            )}
          </div>

          <div>
            <InputFieldContainerWrapper>
              <InputField
                placeholder="Password"
                type={isPassword ? "password" : "text"}
                onChange={handlePasswordChange}
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
            {password && (
              <>
                <StrengthMeterContainer>
                  <StrengthMeterBar strength={passwordStrength} />
                </StrengthMeterContainer>
                <StrengthLabel strength={passwordStrength}>
                  {strengthLabels[passwordStrength]}
                </StrengthLabel>
              </>
            )}
            {passwordError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Password is required
              </p>
            )}
          </div>

          <div>
            <GenderContainer>
              <GenderHeadingContainer onClick={openGenderDropDown}>
                <ParaElement>{gender}</ParaElement>
                <GenderIconContainer size={24} isactive={genderContents} />
              </GenderHeadingContainer>
              <AnimatePresence mode="wait">
                {genderContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={genderContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <GenderContents>
                      <GenderButton
                        onClick={() => setGender("MALE")}
                        isSelected={gender === "MALE"}
                      >
                        Male
                      </GenderButton>
                      <GenderButton
                        onClick={() => setGender("FEMALE")}
                        isSelected={gender === "FEMALE"}
                      >
                        Female
                      </GenderButton>
                    </GenderContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            {genderError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Gender is required
              </p>
            )}
          </div>

          <div>
            <GenderContainer>
              <GenderHeadingContainer onClick={openRolesDropDown}>
                <ParaElement>{role}</ParaElement>
                <GenderIconContainer isactive={roleContents} size={24} />
              </GenderHeadingContainer>
              <AnimatePresence mode="wait">
                {roleContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={roleContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <GenderContents>
                      <GenderButton
                        onClick={() => {
                          setRole("Employee");
                          setRoleContents(false);
                        }}
                        isSelected={role === "Employee"}
                      >
                        Employee
                      </GenderButton>
                      <GenderButton
                        onClick={() => {
                          setRole("Student");
                          setRoleContents(false);
                        }}
                        isSelected={role === "Student"}
                      >
                        Student
                      </GenderButton>
                    </GenderContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            {roleError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Role is required
              </p>
            )}
          </div>

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
          <SignUpButton type="submit" onClick={submitForm}>
            Sign Up
          </SignUpButton>
          <AlreadyHaveAnAccout>
            Already have an account? <LoginLink to="/login">Login</LoginLink>
          </AlreadyHaveAnAccout>
        </FieldsContainer>
      </SignUpSubContainer>
    </SignUpContainer>
  );
};

export default withAuthRedirect(SignUp);
