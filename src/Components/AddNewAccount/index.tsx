import { useState, useRef } from "react";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import {
  AccountDetailsContainer,
  AccountDetailsSubContainer,
  AddNewAccountHeading,
  AddNewAccountHeadingContainer,
  AddNewAccountIconContainer,
  AddNewAccountMainContainer,
  CityLocation,
  ContinueButton,
  EnterYourSalaryContainer,
  EnterYourSalaryHeading,
  EnterYourSalaryInput,
  LocationContainer,
  LocationContents,
  LocationDropDownItem,
  LocationDropDownItemImage,
  LocationDropDownItemText,
  RupeesAndInputContainer,
  RupeesSymbol,
} from "./styledComponents";

import {
  GenderContents,
  GenderContainer,
  GenderHeadingContainer,
  ParaElement,
  GenderIconContainer,
} from "../signup/signupstyled";

import { GenderButton } from "./styledComponents";
import { CarouselItemImage } from "../GainTotalControlOfYourMoney/styledComponents";
import axios from "axios";
import withAuthRedirect from "../../Constants/WithAuthRedirect";
import { handleAxiosError } from "../../Constants/errorHandler";
import NotFound from "../NotFound";

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

const locations = [
  "Alwal",
  "Amberpet",
  "Ameerpet",
  "Attapur",
  "Bachupally",
  "Banjara Hills",
  "Begumpet",
  "Charminar",
  "Dilsukhnagar",
  "Ecil",
  "Gachibowli",
  "Hafiz Baba Nagar",
  "Hayath Nagar",
  "Himayatnagar",
  "Jeedimetla",
  "Jntu",
  "Karkhana",
  "Kompally",
  "Kondapur",
  "Kukatpally",
  "Lb Nagar",
  "Madhapur",
  "Malakpet",
  "Manikonda",
  "Masab Tank",
  "Medchal Road",
  "Miyapur",
  "Mokila",
  "Moosapet",
  "Nagole",
  "Narayanguda",
  "Nizampet",
  "Patancheru",
  "Peerzadiguda",
  "Q City",
  "Sainikpuri",
  "Sangareddy",
  "Saroor Nagar",
  "Serilingampally",
  "Shamshabad",
  "Sivarampalli",
  "Suraram",
  "Tarnaka",
  "Toli Chowki",
  "Uppal",
  "Vanasthalipuram",
];

const AddNewAccount = () => {
  const { handleBack } = NavigationEvents();
  const [spenderContents, setSpenderContents] = useState(false);
  const [locationContents, setLocationContents] = useState(false);

  const [spender, setSpender] = useState("Select your spending pattern");
  const [location, setLocation] = useState("Location in HYD");
  const { accessToken } = ChangingTokens();
  const [salary, setSalary] = useState(0);

  // State to track validation errors
  const [salaryError, setSalaryError] = useState("");
  const [spenderError, setSpenderError] = useState("");
  const [locationError, setLocationError] = useState("");

  const amountInputRef = useRef<HTMLInputElement>(null);

  const { navigateToNewSmartSpendingSuggestions } = NavigationEvents();

  const openGenderDropDown = () => {
    setSpenderContents(!spenderContents);
    setLocationContents(false);
  };

  const openLocationDropDown = () => {
    setLocationContents(!locationContents);
    setSpenderContents(false);
  };

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault(); // Prevent entering "-" or exponential notation
    }
  };

  const validateFields = () => {
    let valid = true;

    if (!salary) {
      setSalaryError("*Salary is required");
      valid = false;
    } else {
      setSalaryError("");
    }

    if (spender === "Select your spending pattern") {
      setSpenderError("*Please select your spending pattern");
      valid = false;
    } else {
      setSpenderError("");
    }

    if (location === "Location in HYD") {
      setLocationError("*Please select a location");
      valid = false;
    } else {
      setLocationError("");
    }

    return valid;
  };

  const confirmNewAccount = () => {
    // Validate fields before proceeding
    if (!validateFields()) return;

    const fetching = async () => {
      try {
        const spenderMap: { [key: string]: string } = {
          "High Spender": "RICH",
          "Average Spender": "MIDDLE CLASS",
          "Less Spender": "POOR",
        };

        const selectedSpender = spenderMap[spender] || "";
        const bodyData = {
          salary: salary,
          user_preference: selectedSpender,
          location: location.toUpperCase(),
        };

        console.log(bodyData);

        const response = await axios.post(`${url}/store_user_data/`, bodyData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        localStorage.setItem("isSalaryAdded", "true");
        navigateToNewSmartSpendingSuggestions();
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          return <NotFound />;
        }
      }
    };

    fetching();
  };

  return (
    <AddNewAccountMainContainer>
      <AddNewAccountHeadingContainer>
        <AddNewAccountIconContainer onClick={handleBack} size={40} />
        <AddNewAccountHeading>Add New Account</AddNewAccountHeading>
      </AddNewAccountHeadingContainer>
      <CarouselItemImage src="/Images/addnewaccounticon.svg" />
      <AccountDetailsContainer>
        <AccountDetailsSubContainer>
          <EnterYourSalaryContainer>
            <EnterYourSalaryHeading>Enter Your Salary</EnterYourSalaryHeading>
            <RupeesAndInputContainer>
              <RupeesSymbol>₹</RupeesSymbol>
              <EnterYourSalaryInput
                type="number"
                onChange={(e) => setSalary(parseInt(e.target.value))}
                onKeyDown={preventInvalidInput}
                min="0"
                ref={amountInputRef}
              />
            </RupeesAndInputContainer>
            {salaryError && <p style={{ color: "red" }}>{salaryError}</p>}
          </EnterYourSalaryContainer>

          <GenderContainer>
            <GenderHeadingContainer onClick={openGenderDropDown}>
              <ParaElement>{spender}</ParaElement>
              <GenderIconContainer size={24} isactive={spenderContents} />
            </GenderHeadingContainer>
            {spenderError && (
              <p style={{ color: "red", textAlign: "left" }}>{spenderError}</p>
            )}
            <AnimatePresence mode="wait">
              {spenderContents && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate={spenderContents ? "visible" : "hidden"}
                  exit="exit"
                >
                  <GenderContents>
                    <GenderButton
                      onClick={() => {
                        setSpender("High Spender");
                        setSpenderContents(false);
                      }}
                      isSelected={spender === "High Spender"}
                    >
                      High Spender
                    </GenderButton>
                    <GenderButton
                      onClick={() => {
                        setSpender("Average Spender");
                        setSpenderContents(false);
                      }}
                      isSelected={spender === "Average Spender"}
                    >
                      Average Spender
                    </GenderButton>
                    <GenderButton
                      onClick={() => {
                        setSpender("Less Spender");
                        setSpenderContents(false);
                      }}
                      isSelected={spender === "Less Spender"}
                    >
                      Less Spender
                    </GenderButton>
                  </GenderContents>
                </motion.div>
              )}
            </AnimatePresence>
          </GenderContainer>

          <LocationContainer>
            <CityLocation>Hyderabad</CityLocation>
            <GenderContainer>
              <GenderHeadingContainer onClick={openLocationDropDown}>
                <ParaElement>{location}</ParaElement>
                <GenderIconContainer size={24} isactive={locationContents} />
              </GenderHeadingContainer>
              {locationError && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {locationError}
                </p>
              )}
              <AnimatePresence mode="wait">
                {locationContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={locationContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <LocationContents>
                      {locations.map((loc, index) => (
                        <LocationDropDownItem
                          key={index}
                          onClick={() => {
                            setLocation(loc);
                            setLocationContents(false);
                          }}
                          isSelected={location === loc}
                        >
                          <LocationDropDownItemText>
                            {loc}
                          </LocationDropDownItemText>
                          <LocationDropDownItemImage src="/Images/Arrow 1.svg" />
                        </LocationDropDownItem>
                      ))}
                    </LocationContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
          </LocationContainer>

          <ContinueButton onClick={confirmNewAccount}>Continue</ContinueButton>
        </AccountDetailsSubContainer>
      </AccountDetailsContainer>
    </AddNewAccountMainContainer>
  );
};

export default AddNewAccount;
