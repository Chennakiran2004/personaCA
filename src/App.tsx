import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import Login from "./Components/Login";
import SetUp from "./Components/Setup";
import AddNewAccount from "./Components/AddNewAccount";
import TabBar from "./Components/TabBar";
import Profile from "./Components/Profile";
import Transaction from "./Components/Transaction";
import Budget from "./Components/Budget";
import Home from "./Components/Home";
import YouAreAllSet from "./Components/YouAreAllSet";
import ExpenseComponent from "./Components/Expense";
import TransactionDetails from "./Components/TransactionDetails";
import UserInfo from "./Components/UserInfo";
import FinancialReport from "./Components/FinancialReport";
import MonthReview from "./Components/MonthReview";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./App.css";
import StartingPage from "./Components/StartingPage";
import ChatBot from "./Components/ChatBot";
import HomeSmartSpendingSuggestions from "./Components/HomeSmartSpendingSuggestion";
import NewSmartSpendingSuggestions from "./Components/NewUserSmartSpendingSuggestions";

function App() {
  const location = useLocation();

  const shouldShowTabBar = [
    "/home",
    "/profile",
    "/transaction",
    "/budget",
  ].includes(location.pathname);

  return (
    <div className="App">
      <Routes>
        <Route path="/intro" element={<HomeCarousel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/" element={<StartingPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/addNewAccount" element={<AddNewAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/youAreAllSet" element={<YouAreAllSet />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/expense" element={<ExpenseComponent />} />
          <Route path="/transaction/:id" element={<TransactionDetails />} />
          <Route path="/financialReport" element={<FinancialReport />} />
          <Route path="/chatBot" element={<ChatBot />} />
          <Route
            path="/HomeSmartSpendingSuggestions"
            element={<HomeSmartSpendingSuggestions />}
          />

          <Route
            path="/NewSmartSpendingSuggestions"
            element={<NewSmartSpendingSuggestions />}
          />

          <Route path="/monthReview" element={<MonthReview />} />
        </Route>
      </Routes>
      {shouldShowTabBar && <TabBar />}
    </div>
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
