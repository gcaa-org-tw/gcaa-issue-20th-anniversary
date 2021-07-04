import React, { useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Speaks, { routesSpeaks } from './pages/Speaks';
import Concert from './pages/Concert';
import Exhibition from './pages/Exhibition';
import Forums, { routesForums } from './pages/Forums';

const routes = [
  {
    path: "/speaks",
    title: '系列講座',
    component: Speaks,
    routes: routesSpeaks,
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
    routes: routesForums,
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
            <Redirect to="/forum/outlook" />
          </Route>
          <Route path="/:path">
            <Container>
              <Header routes={routes} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Container>
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
