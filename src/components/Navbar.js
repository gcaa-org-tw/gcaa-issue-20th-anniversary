import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

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
            <a 
              class="btn btn-success" 
              href="https://gcaa.neticrm.tw/civicrm/contribute/transact?reset=1&id=3" 
              role="button" 
              target="_blank" 
              rel="noreferrer"
            >
              支持綠盟
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
