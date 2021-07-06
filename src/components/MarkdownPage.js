import React  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Avatar, { SpeakersData } from './Avatar';
import CardCTA from './CardCTA';

export default function MarkdownPage(props) {
  const attr = props.attribute
  const speakers = attr.speakers
  const styleImg = {
    backgroundImage: 'url(' + attr.imgsrc + ')',
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
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8">
          {/* title */}
          <Container className="text-center pt-2 pt-md-5">
            <h2>{ attr.heading }</h2>
            <h1>{ attr.subheading }</h1>
            <h2>{ attr.title }</h2>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        {/* landing image */}
        <Container style={styleImg} />
      </Row>
      <Row className="justify-content-center justify-content-md-evenly">
        <Col className="col-8 col-md-6 col-lg-2 order-lg-first order-last">
          {/* left sidebar */}
          { props.sidebar }
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          {/* content */}
          { props.children }
          <CardCTA />
        </Col>
        <Col className="col-6 col-md-3 col-lg-2 order-lg-last order-first">
          {/* right sidebar */}
          <div class="sticky-sidebar">
            <Row>
            {speakers.map((e) =>
              <Avatar
                name={e}
                desc={SpeakersData[e].desc}
                avatarUrl={"img/avatar/" + SpeakersData[e].img}
              />
            )}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
