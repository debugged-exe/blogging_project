import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  // withRouter
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import HomePage from './components/pages/HomePage/HomePage.js';
import BlogPage from './components/pages/BlogPage/BlogPage.js';
import SignInPage from './components/pages/SignInPage/SignInPage';
import Footer from "./components/Footer/Footer.js";
import Demo from './components/pages/Demo/Demo';
import Newsletter from './components/Newsletter/Newsletter';
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import LoginSuccess from "./components/LoginSuccess/LoginSuccess";

import TermsAndConditions from "./components/pages/TermsAndConditions/TermsAndConditions";

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
          <Route exact path='/signup' component={SignInPage} />
          <Route exath path='/privacy-policy' component={PrivacyPolicy}/>
          <Route exath path='/terms-conditions' component={TermsAndConditions}/>
          <Route exath path='/login/success' component={LoginSuccess}/>
          <Route exact path='/demo' component={Demo} />
          <Route exact path="/newsletter" component={Newsletter} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
