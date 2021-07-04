import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import EnvironmentalMovement from './speaks/EnvironmentalMovement'
import ChangTseChou from './speaks/ChangTseChou'
import TamSuiRiver from './speaks/TamSuiRiver'
import CardCTA from '../components/CardCTA'

class NavItemSpeak extends Component {
  render() {
    return (
      <Link to={`${this.props.url}`}>
        <div>
          <span class="speak-id number">{ this.props.speakId }</span>
          <div class="speak-id">{ this.props.title }</div>
        </div>
      </Link>
    )
  }
}

class MarkdownSpeak extends Component {
  render() {
    return (
      <div>
        <ReactMarkdown>
          { this.props.content }
        </ReactMarkdown>
      </div>
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
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
          <div class="col-11 col-sm-8">
            <PageSpeakTitle />
          </div>
          </Route>
        </Switch>
      </div>
      <div class="row justify-content-center align-items-center">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
          <PageSpeakLandingImg />
        </Route>
        </Switch>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-8 col-md-6 col-lg-2 order-lg-first order-last">
          <NavMenuSpeaks match={match.url}/>
        </div>
        <div class="col-11 col-md-8 col-lg-6">
          <Switch>
          <Route path={`${match.path}/:speakId`}>
              <PageSpeakContent />
              <CardCTA />
          </Route>
          </Switch>
        </div>
        <div class="col-4 col-md-3 col-lg-2 order-lg-last order-first">
          <Switch>
          <Route path={`${match.path}/:speakId`}>
            <PageSpeakers />
          </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

function getMarkdownContent (speakId) {
    if (speakId === "environmental-movement") { return EnvironmentalMovement() }
    else if (speakId === "chang-tse-chou") { return ChangTseChou() }
    else { return TamSuiRiver() }
}

function PageSpeakTitle() {
  let { speakId } = useParams()
  let title = getMarkdownContent(speakId).title
  let subtitle = getMarkdownContent(speakId).subtitle
  return (
    <div class="container headline">
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
    </div>
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
    width: '100%',
    minHeight: '60vh',
    marginBottom: '2em',
  };  
  return (
    <div class="container landing-img" style={style}></div>
  )
}

function PageSpeakContent() {
  let { speakId } = useParams();
  let content = getMarkdownContent(speakId).content
  return (
    <div class="content">
        <MarkdownSpeak content={content} />
    </div>
  );
}

function PageSpeakers() {
  let { speakId } = useParams()
  let speakers = getMarkdownContent(speakId).speakers
  return(
    <div>
      { speakers }
    </div>
  )
}

export default Speaks;
