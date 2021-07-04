import React, { useEffect } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Speaks from './pages/Speaks';
import EnvironmentalMovement from './pages/speaks/EnvironmentalMovement' 
import ChangTseChou from './pages/speaks/ChangTseChou' 
import TamSuiRiver from './pages/speaks/TamSuiRiver';
import Concert from './pages/Concert';
import Exhibition from './pages/Exhibition';
import Forums from './pages/Forums';
import DigitalAge from './pages/forum/DigitalAge';

const routes = [
  {
    path: "/speaks",
    title: '系列講座',
    component: Speaks,
    routes: [
      {
        path: "/speaks/environmental-movement",
        component: EnvironmentalMovement
      },
      {
        path: "/speaks/chang-tse-chou",
        component: ChangTseChou
      },
      {
        path: "/speaks/tamsui-river",
        component: TamSuiRiver
      },
    ]
  },
  {
    path: "/concert",
    title: '音樂會',
    component: Concert
  },
  {
    path: "/exhibition",
    title: '藝術展',
    component: Exhibition
  },
  {
    path: "/forum",
    title: '主題論壇',
    component: Forums,
    routes: [
      {
        path: "/forum/digital-age",
        component: DigitalAge
      }
    ]
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/speaks">
            <Redirect to="/speaks/environmental-movement" />
          </Route>
          <Route exact path="/forum">
            <Redirect to="/forum/digital-age" />
          </Route>
          <Route path="/:path">
            <div class="container">
              <Header routes={routes} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </div>
            <Footer />
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
