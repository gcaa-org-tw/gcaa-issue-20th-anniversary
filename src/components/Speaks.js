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

function Speaks() {
  let match = useRouteMatch();
  
  return (
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <h2>系列講座</h2>
        <ul>
          <li>
              <Link to={`${match.url}/enlightenment-and-practice`}>啟蒙與實踐</Link>
          </li>
          <li>
              <Link to={`${match.url}/changtc`}>如何從草根中學習？</Link>
          </li>
        </ul>
      </div>
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
    else { return Speak2() }
}

function PageSpeak() {
  let { speakId } = useParams();
  let content = getMarkdownContent(speakId)
  return (
    <div>
        {/* <h3>Requested topic ID: {speakId}</h3> */}

        <MarkdownSpeak content={content} />
    </div>
  );
}

export default Speaks;