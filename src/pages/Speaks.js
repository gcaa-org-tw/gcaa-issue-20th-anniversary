import React, { Component } from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'

import EnvironmentalMovement from './speaks/EnvironmentalMovement'
import ChangTseChou from './speaks/ChangTseChou'
import TamSuiRiver from './speaks/TamSuiRiver'
import PageContent from '../components/PageContent';

export const routesSpeaks = [
  {
    path: "/speaks/environmental-movement",
    itemId: 1,
    title: '從80年代走來　林聖崇、林瓊華對談環運人生',
    data: EnvironmentalMovement()
  },
  {
    path: "/speaks/chang-tse-chou",
    itemId: 2,
    title: '終身教育、終身學習　盼台灣素質提升　教授張則周再開講',
    data: ChangTseChou()
  },
  {
    path: "/speaks/tamsui-river",
    itemId: 3,
    title: '20年光陰找回淡水河清淨　盼河川串起國土計畫寬廣可能',
    data: TamSuiRiver()
  },
]

export default function Speaks() {
  // let match = useRouteMatch();
  return (
    <Switch>
      {routesSpeaks.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={
            <PageContent
              sidebar={<Sidebar />}
              page={route.data}
            />
          }
        />    

      ))}
    </Switch>    
  )
}

function Sidebar() {
  return (
    <div>
      <h3>系列講座</h3>
      <div class="navmenu speaks">
        <ul>
          {routesSpeaks.map((route, i) =>
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
