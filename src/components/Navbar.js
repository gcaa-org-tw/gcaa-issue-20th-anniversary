import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div class="container">
        <ul>
          <li>
            <NavLink to="/speaks">系列講座</NavLink>
          </li>
          <li>
            <NavLink to="/concert">音樂會</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
