import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './screens/loginScreen/Login'
import { Login2 } from './screens/loginScreen/Login2'
import { Login3 } from './screens/loginScreen/Login3'
import { ForgotPassword } from './screens/loginScreen/ForgotPassword'
import { CheckEmail } from './screens/loginScreen/CheckEmail'
import { Regsteppers }from './screens/registerScreen/Regsteppers';
import { Dashindex } from './screens/dashboard/Dashindex';

function App() {
  return (
   <>
        {/* <ThemeProvider theme={theme}> */}
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/dashboard'} element={<Dashindex />} />
          <Route path={'/signIn'} element={<Login2 />} />
          <Route path={'/signinPin'} element={<Login3 />} />
          <Route path={'/forgotpass'} element={<ForgotPassword />} />
          <Route path={'/checkemail'} element={<CheckEmail />} />
          <Route path={'/stepper'} element={<Regsteppers />} />
        </Routes>
      {/* </ThemeProvider> */}
   </>
  );
}

export default App;
