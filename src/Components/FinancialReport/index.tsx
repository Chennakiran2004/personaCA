import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoughnutChart from "../DoughnutChart";
import {
  FinancialReportContentContainer,
  FinancialReportHeaderContainer,
  FinancialReportHeading,
  FinancialReportMainContainer,
  DoughunChartContainer,
  MonthDropDownContainer,
  MonthDropDown,
  DropDownText,
  IncomeAndExpenseTabs,
  ExpenseButton,
  ExpenseAndIncomeButton,
  ExpensesBarsContainer,
} from "./styledComponents";

import {
  CategoriesColors,
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { IconContianer } from "../signup/signupstyled";
import ExpensesItem from "../ExpensesItem";
import SalayItem from "../SalaryItem";
import axios from "axios";
import { handleAxiosError } from "../../Constants/errorHandler";
import NotFound from "../NotFound";

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const arrowVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FinancialReport = () => {
  const { handleBack } = NavigationEvents();
  const { accessToken } = ChangingTokens();
  const [notFound, setIsNotFound] = useState(false);

  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false); // Dropdown state
  const today = new Date();
  const todayMonth = today.getMonth(); // Get current month index
  const [selectedMonth, setSelectedMonth] = useState(todayMonth); // Selected month state
  const [expensesData, setExpensesData] = useState<any[]>([]); // Correctly type the state
  const [incomeData, setIncomeData] = useState<
    {
      type: string;
      amount: string;
      icon: string;
      progress: number;
      color: string;
    }[]
  >([]);
  const [expenseTotal, setExpenseTotal] = useState(0); // Expense total
  const [incomeTotal, setIncomeTotal] = useState(0); // Income total

  const income = incomeTotal.toString();
  const totalIncome = parseInt(income);

  const expense = expenseTotal.toString();
  const totalExpense = parseInt(expense);

  const handleExpenseClick = () => {
    setActiveTab("expense");
  };

  const handleIncomeClick = () => {
    setActiveTab("income");
  };

  const handleMonthClick = (month: string) => {
    const monthIndex = months.indexOf(month); // Get the month index
    setSelectedMonth(monthIndex);
    setMonthDropdownOpen(false); // Close dropdown after selection
  };

  const currentData = activeTab === "expense" ? expensesData : incomeData;
  const amounts = currentData.map((item) =>
    Number(item.amount.replace(/[^0-9.-]+/g, ""))
  );
  const colors = currentData.map((item) => item.color);

  // Fetching Expense Data
  useEffect(() => {
    const fetching = async () => {
      console.log(selectedMonth);
      try {
        const response = await axios.post(
          `${url}/get_user_pie_chart_financial_transactions/`,
          {
            month: selectedMonth + 1, // Use the correct month number (1-based)
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );

        setExpenseTotal(response.data.total_expense || 0); // Handle undefined total expense
        const expenses = response.data.user_expenses_history.map(
          (item: any) => {
            const categoryTotal = Number(item.total);
            const CategoryColor = CategoriesColors[item.category] || "#000"; // Default color if not found
            return {
              type: item.category,
              amount: `-₹${categoryTotal}`,
              icon: "/Images/shoppingcolor.svg", // Set default icon
              progress:
                (Number(categoryTotal) / Number(response.data.total_expense)) *
                100,
              color: CategoryColor,
            };
          }
        );
        setExpensesData(expenses);
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          setIsNotFound(true);
        }
      }
    };

    const fetchIncome = async () => {
      try {
        const response = await axios.get(`${url}/get_user_income_pie_chart/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "Application/json",
          },
        });

        setIncomeTotal(response.data.user_income || 0); // Handle undefined total income
        const incomeDataObj = [
          {
            type: "Salary",
            amount: `+₹${response.data.user_income || 0}`, // Handle undefined income
            icon: "/Images/salarycolor.svg",
            progress: 100,
            color: "#4CAF50",
          },
        ];
        setIncomeData(incomeDataObj);
      } catch (err: any) {
        handleAxiosError(err);
        if (err.response && err.response.status === 404) {
          setIsNotFound(true);
        }
      }
    };

    fetchIncome();
    fetching();
  }, [selectedMonth, accessToken]);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <FinancialReportMainContainer>
      <FinancialReportContentContainer>
        <FinancialReportHeaderContainer>
          <IconContianer onClick={handleBack} size={40} />
          <FinancialReportHeading>Financial Report</FinancialReportHeading>
        </FinancialReportHeaderContainer>

        {/* <MonthDropDownContainer>
          <MonthDropDown
            onClick={() => setMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            <motion.img
              src="/Images/arrow down 2.svg"
              variants={arrowVariants}
              animate={isMonthDropdownOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              style={{ marginRight: "8px" }}
            />
            <DropDownText>{months[selectedMonth]}</DropDownText>
          </MonthDropDown>

          <AnimatePresence>
            {isMonthDropdownOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  zIndex: 1,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
              >
                {months.map((month) => (
                  <div
                    key={month}
                    onClick={() => handleMonthClick(month)}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                      borderRadius: "4px",
                      backgroundColor:
                        months[selectedMonth] === month ? "#f0f0f0" : "#fff",
                      transition: "background-color 0.2s",
                    }}
                  >
                    {month}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </MonthDropDownContainer> */}

        <DoughunChartContainer>
          {/* Conditionally render the Doughnut Chart for either Income or Expense */}
          {activeTab === "expense" ? (
            <DoughnutChart
              data={amounts}
              type={expensesData.map((expense) => expense.type)}
              total={totalExpense}
              backgroundColors={colors}
            />
          ) : (
            <DoughnutChart
              data={[incomeTotal]} // Show total income as a whole
              total={totalIncome}
              type={incomeData.map((income) => income.type)}
              backgroundColors={["#4CAF50"]} // Green color for income
            />
          )}
        </DoughunChartContainer>

        <IncomeAndExpenseTabs>
          <ExpenseAndIncomeButton
            as={activeTab === "expense" ? ExpenseButton : "button"}
            onClick={handleExpenseClick}
          >
            Expense
          </ExpenseAndIncomeButton>

          <ExpenseAndIncomeButton
            as={activeTab === "income" ? ExpenseButton : "button"}
            onClick={handleIncomeClick}
          >
            Income
          </ExpenseAndIncomeButton>
        </IncomeAndExpenseTabs>

        <ExpensesBarsContainer>
          {activeTab === "expense"
            ? expensesData.map((expense: any, index) => (
                <ExpensesItem
                  key={index}
                  type={expense.type}
                  amount={expense.amount}
                  icon={expense.icon}
                  progress={expense.progress}
                  color={expense.color}
                />
              ))
            : incomeData.map((income, index) => (
                <SalayItem
                  key={index}
                  progress={income.progress}
                  color={income.color}
                  icon={income.icon}
                  amount={income.amount}
                />
              ))}
        </ExpensesBarsContainer>
      </FinancialReportContentContainer>
    </FinancialReportMainContainer>
  );
};

export default FinancialReport;
