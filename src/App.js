import reactDom from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { Forgot } from './pages/forgotPassword/Forgot';
import Reset from './pages/reset/Reset';
import Dashboard from './pages/dashboard/Dashboard';
import IconColor from './components/colors/IconColor';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Signup} exact />
        <Route path='/signin' component={Signin} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/resetpassword' component={Reset} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/ic' component={IconColor} /> 
        <Route path='*' component={() => "Error 404 Page Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;