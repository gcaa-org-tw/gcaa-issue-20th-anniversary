import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import ButtonDonation from './ButtonDonation';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">綠盟二十週年特刊</NavLink>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link active" to="/speaks">系列講座</NavLink>
              </li>
              <li>
                <NavLink class="nav-link active" to="/concert">音樂會</NavLink>
              </li>
            </ul>
            <ButtonDonation WithLove />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
