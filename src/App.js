import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Login } from './screens/loginScreen/Login'
import { Login2 } from './screens/loginScreen/Login2'
import { Login3 } from './screens/loginScreen/Login3'
import { ForgotPassword } from './screens/loginScreen/ForgotPassword'
import { CheckEmail } from './screens/loginScreen/CheckEmail'
import { OwnerinfoPng } from './Assets/Svg/OwnerinfoPng';
import Regstepper from './screens/registerScreen/Regstepper';

function App() {
  return (
    < >
      {/* <ThemeProvider theme={theme}> */}
      {/* <Login /> */}
      
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/signIn'} element={<Login2 />} />
          <Route path={'/signinPin'} element={<Login3 />} />
          <Route path={'/forgotpass'} element={<ForgotPassword />} />
          <Route path={'/checkemail'} element={<CheckEmail />} />
          <Route path={'/stepper'} element={<Regstepper />} />
        </Routes>






      {/* </ThemeProvider>      */}
    </>
  );
}

export default App;
