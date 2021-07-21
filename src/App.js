import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from './components/pages/HomePage/HomePage.js';
import BlogPage from './components/pages/BlogPage/BlogPage.js';
import SignInPage from './components/pages/SignInPage/SignInPage';

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
          <Route exact path='/signinpage' component={SignInPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
