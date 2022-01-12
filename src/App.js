import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { Forgot } from './pages/forgotPassword/Forgot';
import Reset from './pages/reset/Reset';


function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <Signin />
      {/* <Forgot /> */}
      {/* <Reset /> */}
    </div>
  );
}

export default App;
