import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCTA from './CardCTA';
import Markdown from './Markdown';

export default function PageContent(props) {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8">
          <Title title={ props.page.title } subtitle={props.page.subtitle} />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <LandingImg imgSrc={ props.page.imgSrc } />
      </Row>
      <Row className="justify-content-center justify-content-md-evenly">
        <Col className="col-8 col-md-6 col-lg-2 order-lg-first order-last">
          { props.sidebar }
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <div class="content">
            <Markdown content={ props.page.content } />
          </div>
          <CardCTA />
        </Col>
        <Col className="col-6 col-md-3 col-lg-2 order-lg-last order-first">
          <KeynoteSpeakers speakers={ props.page.speakers } />
        </Col>
      </Row>
    </Container>
  );
}

function Title(props) {
  return (
    <Container className="text-center pt-2 pt-md-5">
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
    </Container>
  )
}

function LandingImg(props) {
  const style = {
    backgroundImage: 'url(' + props.imgSrc + ')',
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

function KeynoteSpeakers(props) {
  return (
    <div>{ props.speakers }</div>
  )
}
