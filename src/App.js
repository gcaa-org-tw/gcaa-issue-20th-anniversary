import React from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from "./pages/Landing";
import Speaks from "./pages/Speaks";
import EnvironmentalMovement from "./pages/speaks/EnvironmentalMovement" 
import LifelongLearning from "./pages/speaks/LifelongLearning" 
import TamSuiRiver from './pages/speaks/TamSuiRiver';
import Concert from "./pages/Concert";
import './App.scss';

const routes = [
  {
    path: "/speaks",
    component: Speaks,
    routes: [
      {
        path: "/speaks/environmental-movement",
        component: EnvironmentalMovement
      },
      {
        path: "/speaks/lifelong-learning",
        component: LifelongLearning
      },
      {
        path: "/speaks/tamsui-river",
        component: TamSuiRiver
      },
    ]
  },
  {
    path: "/concert",
    component: Concert
  },
];

export default function App() {
  return (
    <div class="container">
      <HashRouter>
        <Switch>
          <Route exact path="/speaks">
            <Redirect to="/speaks/environmental-movement" />
          </Route>
          <Route path="/:path">
            <Navbar />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
