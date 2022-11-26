import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/style";
import { Route, Routes } from 'react-router-dom';
import { Login } from './screens/loginScreen/Login'
import { Login2 } from './screens/loginScreen/Operators'
import { Login3 } from './screens/loginScreen/Login3'
import { ForgotPassword } from './screens/loginScreen/ForgotPassword'
import { ForgotPin } from './screens/loginScreen/ForgotPin'
import { CheckEmail } from './screens/loginScreen/CheckEmail'
import { Regsteppers }from './screens/registerScreen/Regsteppers';
import { Dashindex } from './screens/dashboard/Dashindex'; 
import MealPlan2 from './screens/MealPlan2';
import MealPlan from './screens/MealPlan/MealPlan';
import Dashboard from './screens/dashboard/Dashboard';
import Order from './screens/dashboard/Order';
import Subscription from './screens/dashboard/Subscription';
import Menu from './screens/dashboard/Menu';
import Financials from './screens/dashboard/Financials';
import Employee from './screens/dashboard/Employee';
import Settings from './screens/dashboard/Settings';
import AddDishes from './components/Dishes/AddDishes/AddDishes';
import AddMealPlan from './components/Menu/AddMealPlan/AddMealPlan';
import { BackToDishes } from './components/Dishes/AddDishes/BackToDishes/BackToDishes';
import AllDishes from './components/Dishes/AllDishes/AllDishes';

function App() {
  return (
   <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/operators'} element={<Login2 />} />
          <Route path={'/signinPin'} element={<Login3 />} />
          <Route path={'/forgotpass'} element={<ForgotPassword />} />
          <Route path={'/forgotpin'} element={<ForgotPin />} />
          <Route path={'/checkemail'} element={<CheckEmail />} />
          <Route path={'/stepper'} element={<Regsteppers />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/dish" element={<AddDishes />} />
          <Route path="/alldishes" element={<AllDishes />} />
          <Route path="/mealPlan" element={<AddMealPlan />} />
          <Route path="/backToDishes" element={<BackToDishes />} />
        
        </Routes>
      </ThemeProvider>
   </>
  );
}

export default App;