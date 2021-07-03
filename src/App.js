import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Speaks from "./components/Speaks";
import './App.scss';

class Navbar extends Component {
  render() {
    return (
      <div class="mdc-layout-grid">
        <ul>
          <li>
            <Link to="/speaks/enlightenment-and-practice">系列講座</Link>
          </li>
          <li>
            <Link to="/musical">綠盟 20 週年感恩音樂會</Link>
          </li>
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    <Router>
      <div class="container">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:path">
          <div class="container">
            <Navbar/>
          </div>

          <div class="container">
            <Switch>
              <Route path="/musical"><About /></Route>
              <Route path="/speaks"><Speaks /></Route>
            </Switch>
          </div>
        </Route>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/speaks/enlightenment-and-practice">系列講座</Link>
    </div>
    
  );
}

function About() {
  return <h2>音樂會</h2>;
}

export default App;
