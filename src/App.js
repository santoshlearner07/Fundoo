import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import { Forgot } from './pages/forgotPassword/Forgot';


function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Forgot />
    </div>
  );
}

export default App;
