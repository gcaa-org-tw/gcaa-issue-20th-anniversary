import React, { Component } from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Markdown from '../components/Markdown';
import Outlook from './forum/Outlook';
import DigitalAge from './forum/DigitalAge';
import Sustainability from './forum/Sustainability';

export const routesForums = [
  {
    path: "/forum/outlook",
    forumId: 1,
    component: Outlook
  },
  {
    path: "/forum/digital-age",
    forumId: 2,
    component: DigitalAge
  },
  {
    path: "/forum/sustainability",
    forumId: 3,
    component: Sustainability
  },
]

export default function Forums() {
  let match = useRouteMatch();
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Switch>
        <Route path={`${match.path}/:forumId`}>
          <Col className="col-11 col-sm-8">
            {/* <PageContent forumId={forumId} /> */}
          </Col>
          </Route>
        </Switch>
      </Row>
    </Container>
  )
}

// function PageContent() {
//   let { forumId } = useParams();
//   return (
//     <div class="content">
//       <Markdown content={content} />
//     </div>
//   );
// }
