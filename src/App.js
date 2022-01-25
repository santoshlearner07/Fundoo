import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import './App.css';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { Forgot } from './pages/forgotPassword/Forgot';
import Reset from './pages/reset/Reset';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import useAuth from './services/useAuth';
 
function App() {
  const [isAuth,login, logout] = useAuth(false)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Signup} exact />
        <Route path='/signin' component={Signin} auth={isAuth} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/resetpassword' component={Reset} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='*' component={() => "Error 404 Page Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;