import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/style";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./screens/loginScreen/Login";
import { Login2 } from "./screens/loginScreen/Operators";
import { Login3 } from "./screens/loginScreen/Login3";
import { ForgotPassword } from "./screens/loginScreen/ForgotPassword";
import { ForgotPin } from "./screens/loginScreen/ForgotPin";
import { CheckEmail } from "./screens/loginScreen/CheckEmail";
import PasswordReset from "./screens/loginScreen/PasswordReset";
import { Regsteppers } from "./screens/registerScreen/Regsteppers";
import { Dashindex } from "./screens/dashboard/Dashindex";
// import MealPlan from "./screens/MealPlan/MealPlan";
import Menu2 from './screens/Menu2'
import Dashboard from "./screens/dashboard/Dashboard";
import Order from "./screens/dashboard/Order";
import Menu from "./screens/dashboard/Menu";
import Financials from "./screens/dashboard/Financials";
import Employee from "./screens/dashboard/Employee";
import Settings from "./screens/dashboard/Settings/index";
import Dishes from "./components/Dishes";
import AddDishes from "./components/Dishes/AddDishes/AddDishes";
import AddMealPlan from "./components/Menu/AddMealPlan/AddMealPlan";
import { BackToDishes } from "./components/Dishes/AddDishes/BackToDishes/BackToDishes";
import AllDishes from "./components/Dishes/AllDishes/AllDishes";
import { EditDishes } from "./components/Dishes/EditDishes/EditDishes";
import { DetailDishes } from "./components/Dishes/AllDishes/DetailDishes/DetailDishes";
import Subscription from "./screens/Subscription/Subscription";
import ErrorBoundary from "screens/ErrorBoundary";
import { getCaterer } from "helper";

function App() {
  const [caterer, setCaterer] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const caterer = getCaterer()
    if (token === null || token === "") return navigate("/login");
    if (caterer) setCaterer(caterer)


  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/operators"} element={<Login2 />} />
            <Route path={"/signinPin"} element={<Login3 />} />
            <Route path={"/forgotpass"} element={<ForgotPassword />} />
            <Route path={"/forgotpin"} element={<ForgotPin />} />
            <Route path={"/checkemail"} element={<CheckEmail />} />
            <Route path={"/passwordReset"} element={<PasswordReset />} />
            <Route path={"/stepper"} element={<Regsteppers />} />
            <Route path={"/"} element={<Login />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/subscription" element={<Subscription caterer={caterer}/>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu2" element={<Menu2 />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/alldishes" element={<AllDishes />} />
            <Route path="/mealPlan" element={<AddMealPlan />} />
            <Route path="/backToDishes" element={<BackToDishes />} />
            <Route path="/editdishes" element={<EditDishes />} />
            <Route path="/detaildishes" element={<DetailDishes />} />
            <Route path="/adddishes" element={<AddDishes />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
