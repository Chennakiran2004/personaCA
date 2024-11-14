import { AnimatePresence, motion } from "framer-motion";
import {
  GenderButton,
  GenderContainer,
  GenderContents,
  GenderHeadingContainer,
  GenderIconContainer,
  InputField,
  ParaElement,
} from "../signup/signupstyled";
import {
  BackIconContainer,
  ExpenseBottomContainer,
  ExpenseBottomSubContainer,
  ExpenseContainer,
  ExpenseHeader,
  ExpenseHeading,
  ExpenseSubContainer,
  CategoryContents,
  DescriptionField,
  ContinueButton,
  CategoryParaElement,
  InputContainer,
  CategoryButton,
  InputExpense,
  InputHeading,
  RupeesSymbolExpense,
  ErrorMessage,
} from "./styledComponents";
import { useState, useEffect, useRef } from "react";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import {
  EnterYourSalaryInput,
  RupeesAndInputContainer,
  RupeesSymbol,
} from "../AddNewAccount/styledComponents";
import { handleAxiosError } from "../../Constants/errorHandler";

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
      duration: 0.1,
    },
  },
};

const categories = [
  "Food",
  "Entertainment",
  "Travel",
  "Health",
  "Miscellaneous",
  "Rent",
  "Savings",
  "Shopping",
];

const ExpenseComponent = () => {
  const { handleBack } = NavigationEvents();
  const { accessToken } = ChangingTokens();

  const [amount, setAmount] = useState("");
  const [inputWidth, setInputWidth] = useState(5);
  const [genderContents, setGenderContents] = useState(false);
  const [gender, setGender] = useState("Category");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<String[]>([]);
  const { navigateToHome } = NavigationEvents();

  const amountInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, []);

  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
  };

  const handleCategoryChange = (category: string) => {
    setGender(category);
    if (selectedCategory.includes(category)) {
      const filteredArr = selectedCategory.filter(
        (eachItem) => eachItem != category
      );
      setGender("Category");
      return setSelectedCategory(filteredArr);
    }
    setGenderContents(false);
    return setSelectedCategory([category]);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= 10) {
      setAmount(value);
      const newWidth = Math.max(5, value.length * 25);
      setInputWidth(newWidth);
    }
  };

  const expenseAdd = () => {
    const fetching = async () => {
      if (amount === "" || amount === "0") {
        return setError("Please enter amount greater than 0");
      }

      if (gender === "Category") {
        return setError("Please select a category");
      }

      if (description.length === 0) {
        return setError("Please enter description");
      }

      const data = {
        category: selectedCategory[0].toLocaleUpperCase(),
        expense_amount: amount,
        description: description,
      };
      try {
        const response = await axios.post(
          `${url}/update_user_expense`,
          {
            category: selectedCategory[0],
            expense_amount: amount,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );
        navigateToHome();
        console.log(response);
      } catch (err: any) {
        if (err.response) {
          if (err.response.data.message) {
            setError(err.response.data.message);
          }
        }
        handleAxiosError(err);
      }
    };

    fetching();
  };

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault(); // Prevent entering "-" or exponential notation
    }
  };

  const changeDescription = (e: any) => {
    if (e.target.value.length < 15) {
      setError("");
      return setDescription(e.target.value);
    }

    setError("Description should be less than 15 characters");
  };

  return (
    <ExpenseContainer>
      <ExpenseSubContainer>
        <ExpenseHeader>
          <BackIconContainer onClick={handleBack} size={40} />
          <ExpenseHeading>Expense</ExpenseHeading>
        </ExpenseHeader>
        <InputContainer>
          <InputHeading>How much?</InputHeading>
          <RupeesAndInputContainer>
            <RupeesSymbolExpense>₹</RupeesSymbolExpense>
            <InputExpense
              type="number"
              ref={amountInputRef}
              value={amount}
              onChange={handleAmountChange}
              style={{ width: `${inputWidth}px` }}
              onKeyDown={preventInvalidInput}
              min="0"
            />
          </RupeesAndInputContainer>
        </InputContainer>
        <ExpenseBottomContainer>
          <ExpenseBottomSubContainer>
            <GenderContainer>
              <GenderHeadingContainer onClick={openGenderDropDown}>
                <CategoryParaElement category={gender}>
                  {gender}
                </CategoryParaElement>
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
                    <CategoryContents>
                      {categories.map((eachItem) => {
                        return (
                          <CategoryButton
                            isSelected={selectedCategory.includes(eachItem)}
                            onClick={() => {
                              handleCategoryChange(eachItem);
                            }}
                          >
                            {eachItem}
                          </CategoryButton>
                        );
                      })}
                    </CategoryContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            <DescriptionField
              onChange={changeDescription}
              onFocus={() => setGenderContents(false)}
              value={description}
              type="text"
              placeholder="Description"
            />
            {error.length > 0 && <ErrorMessage>*{error}</ErrorMessage>}
            <ContinueButton onClick={expenseAdd}>Continue</ContinueButton>
          </ExpenseBottomSubContainer>
        </ExpenseBottomContainer>
      </ExpenseSubContainer>
    </ExpenseContainer>
  );
};

export default ExpenseComponent;
