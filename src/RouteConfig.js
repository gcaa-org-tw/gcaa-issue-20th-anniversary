import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Speaks from "./pages/Speaks";
import EnvironmentalMovement from "./pages/speaks/EnvironmentalMovement" 
import LifelongLearning from "./pages/speaks/LifelongLearning" 
import Landing from "./pages/Landing";

const routes = [
  {
    path: "/",
    component: Landing
  },
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
      }
    ]
  }
];

export default function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/speaks">主題論壇</NavLink>
          </li>
          <li>
            <NavLink to="/">Sandwiches</NavLink>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
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
