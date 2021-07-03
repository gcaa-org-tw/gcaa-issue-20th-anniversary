import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Speaks from "./components/Speaks";
import './App.scss';

function App() {
  return (
    <Router>
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">系列講座</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
         </div>
        </div>

        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-12">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Speaks />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
