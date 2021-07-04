import React, { Component } from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'

import EnvironmentalMovement from './speaks/EnvironmentalMovement'
import ChangTseChou from './speaks/ChangTseChou'
import TamSuiRiver from './speaks/TamSuiRiver'
import CardCTA from '../components/CardCTA'
import Markdown from '../components/Markdown';

export const routesSpeaks = [
  {
    path: "/speaks/environmental-movement",
    speakId: 1,
    component: EnvironmentalMovement
  },
  {
    path: "/speaks/chang-tse-chou",
    speakId: 2,
    component: ChangTseChou
  },
  {
    path: "/speaks/tamsui-river",
    speakId: 3,
    component: TamSuiRiver
  },
]

class NavItemSpeak extends Component {
  render() {
    return (
      <Link to={`${this.props.url}`} class="speak-id">
        <Row className="py-2">
          <span class="number">{ this.props.speakId }</span>
          <Col>{ this.props.title }</Col>
        </Row>
      </Link>
    )
  }
}

class NavMenuSpeaks extends Component {
  render() {
    return (
      <div>
        <h3>系列講座</h3>
        <div class="navmenu speaks">
          <ul>
          <li>
            <NavItemSpeak
              speakId="1"
              title="從80年代走來　林聖崇、林瓊華對談環運人生"
              url={`${this.props.match}/environmental-movement`}
            />
          </li>
          <li>
            <NavItemSpeak
              speakId="2"
              title="終身教育、終身學習　盼台灣素質提升　教授張則周再開講"
              url={`${this.props.match}/chang-tse-chou`}
            />
          </li>
          <li>
            <NavItemSpeak
              speakId="3"
              title="20年光陰找回淡水河清淨　盼河川串起國土計畫寬廣可能"
              url={`${this.props.match}/tamsui-river`}
            />
          </li>
          </ul>
        </div>
      </div>
    )
  }
}

function Speaks() {
  let match = useRouteMatch();
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
          <Col className="col-11 col-sm-8">
            <PageSpeakTitle />
          </Col>
          </Route>
        </Switch>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
          <PageSpeakLandingImg />
        </Route>
        </Switch>
      </Row>
      <Row className="justify-content-center justify-content-md-evenly">
        <Col className="col-8 col-md-6 col-lg-2 order-lg-first order-last">
          <NavMenuSpeaks match={match.url}/>
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <Switch>
          <Route path={`${match.path}/:speakId`}>
              <PageSpeakContent />
              <CardCTA />
          </Route>
          </Switch>
        </Col>
        <Col className="col-6 col-md-3 col-lg-2 order-lg-last order-first">
          <Switch>
          <Route path={`${match.path}/:speakId`}>
            <PageSpeakers />
          </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

function getMarkdownContent (speakId) {
    if (speakId === "environmental-movement") { return EnvironmentalMovement() }
    else if (speakId === "chang-tse-chou") { return ChangTseChou() }
    else { return TamSuiRiver() }
}

export default function PageSpeakTitle() {
  let { speakId } = useParams()
  let title = getMarkdownContent(speakId).title
  let subtitle = getMarkdownContent(speakId).subtitle
  return (
    <Container className="text-center pt-2 pt-md-5">
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
    </Container>
  )
}

function PageSpeakLandingImg() {
  let { speakId } = useParams()
  let imgUrl = getMarkdownContent(speakId).imgsrc
  const style = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: '50%',     
    backgroundColor: 'lightgray',
    width: '100%',
    minHeight: '60vh',
    maxHeight: '60vh',
    marginBottom: '2em',
  };  
  return (
    <Container style={style}></Container>
  )
}

function PageSpeakContent() {
  let { speakId } = useParams();
  let content = getMarkdownContent(speakId).content
  return (
    <div class="content">
      <Markdown content={content} />
    </div>
  );
}

function PageSpeakers() {
  let { speakId } = useParams()
  let speakers = getMarkdownContent(speakId).speakers
  return (
    <div>{ speakers }</div>
  )
}
