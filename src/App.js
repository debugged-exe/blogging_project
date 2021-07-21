import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from './components/pages/HomePage/HomePage.js';
import BlogPage from './components/pages/BlogPage/BlogPage.js';
import Login from './components/pages/Login/Login.js';
import SignUp from './components/pages/SignUp/SignUp';
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/category' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
