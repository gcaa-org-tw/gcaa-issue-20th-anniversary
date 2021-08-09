import React, { useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About';
import Speaks from './pages/Speaks'
import Concert from './pages/Concert'
import Exhibition from './pages/Exhibition'
import Forums from './pages/Forums'
import HuiMin from './pages/HuiMin';
import Epilogue from './pages/Epilogue';

const routes = [
  {
    path: "/about",
    title: '關於綠盟',
    component: About,
  },
  {
    path: "/speaks",
    title: '系列講座',
    component: Speaks,
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
  },
  {
    path: "/hui-min",
    title: '紀念劉惠敏',
    component: HuiMin,
  },
  {
    path: "/epilogue",
    title: '秘書長的話',
    component: Epilogue,
  },
];

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Switch>
          {/* redirect /speak to page speak nr 1 */}
          <Route exact path="/speaks">
            <Redirect to="/speaks/environmental-movement" />
          </Route>

          {/* redirect /forum to page forum nr 1 */}
          <Route exact path="/forum">
            <Redirect to="/forum/outlook" />
          </Route>

          {/* all other routes except homepage */}
          <Route path="/:path">
            <Container>
              <Header routes={routes} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              {/*  */}
            </Container>
            <Footer />
          </Route>

          {/* homepage */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
