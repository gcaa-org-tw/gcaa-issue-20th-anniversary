import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

export default function Sidebar(props) {
  return (
    <div class="sticky-sidebar">
      <h3>{props.title}</h3>
      <div class="navmenu speaks">
        <ul>
          {props.routes.map((route, i) =>
            <li>
              <SidebarItem
                itemId={route.itemId}
                title={route.title}
                url={route.path}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

class SidebarItem extends Component {
  render() {
    return (
      <Link to={`${this.props.url}`} class="speak-id">
        <Row className="py-2">
          <span class="number">{ this.props.itemId }</span>
          <Col>{ this.props.title }</Col>
        </Row>
      </Link>
    )
  }
}
