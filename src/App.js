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
import useAuth from './services/Auth';
import Archive from './pages/archive/Archive';
import Notes from './pages/notes/Notes';
import Trash from './pages/trash/Trash';
import SignOut from './pages/signOut/SignOut';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Signup} exact />
        <Route path='/signin' component={Signin} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/resetpassword' component={Reset} />
        <Route path='/profile' component={SignOut} />

        <Route path="/notes" exact component={Notes} />

        <Route path="/" component={Dashboard} />

        {/* <ProtectedRoute Route path="/" component={Dashboard} /> */}

        <Route exact path="/archive" component={Archive} />
        <Route exact path="/trash" component={Trash} />

        <Route path='*' component={() => "Error 404 Page Not Found"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;