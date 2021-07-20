import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomePage from './components/pages/HomePage/HomePage.js';
import BlogPage from './components/pages/BlogPage/BlogPage.js';
import Login from './components/pages/Login/Login.js';



const App=()=> {
  return (
    <div className="App">
     <Router>
       <NavBar/>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/home' component={HomePage}/>
              <Route exact path='/blog' component={BlogPage}/>
              <Route exact path='/category' component={HomePage}/>
              <Route exact path='/login' component={Login}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
