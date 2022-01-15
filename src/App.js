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


function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Signin /> */}
      {/* <Forgot /> */}
      {/* <Reset /> */}
    </div>
    <BrowserRouter>
        <div className="App">
          {/* <Signup /> */}
          {/* <Signin /> */}
          {/* <Forgot /> */}
          {/* <Reset /> */}
        </div>
      <Switch>
 
        <Route path='/' component={Signup} exact/>
        <Route path='/signin' component={Signin} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/reset' component={Reset} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
