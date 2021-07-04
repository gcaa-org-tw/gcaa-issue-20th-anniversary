import React, { useEffect } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import ButtonDonation from './components/ButtonDonation';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Speaks from './pages/Speaks';
import EnvironmentalMovement from './pages/speaks/EnvironmentalMovement' 
import ChangTseChou from './pages/speaks/ChangTseChou' 
import TamSuiRiver from './pages/speaks/TamSuiRiver';
import Concert from './pages/Concert';
import Exhibition from './pages/Exhibition';

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
          <Route path="/:path">
            <div class="container">
              <Navbar />
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

function NavItem(route) {
  return (
    <NavLink class="nav-link" to={route.path}>{route.title}</NavLink>
  )
}

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="navbar-brand">綠盟二十週年特刊</div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {routes.map((route, i) => (
              <NavItem key={i} {...route} />
            ))}
          </ul>
          <ButtonDonation WithLove />
        </div>
      </div>
    </nav>
  )
}
