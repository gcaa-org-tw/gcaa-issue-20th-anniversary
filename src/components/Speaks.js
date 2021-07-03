import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Speak1 from './speaks/Speak1'
import Speak2 from './speaks/Speak2'

class NavItemSpeak extends Component {
  render() {
    return (
      <Link to={`${this.props.url}`}>
        <div>
          <span class="spead-id">{ this.props.speakId }</span>
          { this.props.title }
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
              title="啟蒙與實踐：我們與台灣環境運動交會的生命軌跡"
              url={`${this.props.match}/enlightenment-and-practice`}
            />
          </li>
          <li>
            <NavItemSpeak
              speakId="2"
              title="如何從草根中學習？公益、生態、社會的漫長追尋"
              url={`${this.props.match}/changtc`}
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
      <div class="row justify-content-md-center">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
          <div class="col-md-auto">
            <PageSpeakTitle />
          </div>
          </Route>
        </Switch>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-2">
          <NavMenuSpeaks match={match.url}/>
        </div>
        <div class="col-6">
          <Switch>
          <Route path={`${match.path}/:speakId`}>
              <PageSpeakContent />
          </Route>
          {/* <Route path={match.path}>
              <h3>Please select a topic.</h3>
            </Route> */}
          </Switch>
        </div>
        <div class="col-2">
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
    if (speakId === "enlightenment-and-practice") { return Speak1() }
    else { return Speak2() }
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
