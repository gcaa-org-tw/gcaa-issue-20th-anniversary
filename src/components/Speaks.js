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
      <div class="mdc-layout-grid__cell--span-3">
        <h2>系列講座</h2>
        <div class="navmenu speaks">
          <ul>
          <li>
            <NavItemSpeak
              speakId="1"
              title="啟蒙與實踐"
              url={`${this.props.match}/enlightenment-and-practice`}
            />
          </li>
          <li>
            <NavItemSpeak
              speakId="2"
              title="如何從草根中學習？"
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
    <div class="mdc-layout-grid__inner">
      <NavMenuSpeaks match={match.url}/>
      <div class="mdc-layout-grid__cell--span-6">
        <Switch>
        <Route path={`${match.path}/:speakId`}>
            <PageSpeak />
        </Route>
        <Route path={match.path}>
            <h3>Please select a topic.</h3>
        </Route>
        </Switch>
      </div>
    </div>
  );
}

function getMarkdownContent (speakId) {
    if (speakId === "enlightenment-and-practice") { return Speak1() }
    else { return (Speak2().content) }
}

function PageSpeak() {
  let { speakId } = useParams();
  let content = getMarkdownContent(speakId)
  return (
    <div>
        {/* <h3>Requested topic ID: {speakId}</h3> */}
        {/* <NavMenuSpeaks match={match.url}/> */}
        <MarkdownSpeak content={content} />
    </div>
  );
}

export default Speaks;
