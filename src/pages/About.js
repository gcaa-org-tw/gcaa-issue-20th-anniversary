import { Container, Row, Col } from "react-bootstrap"
import CardCTA from "../components/CardCTA";
import { react as AboutMD } from './about.md'

const imgsrc = "img/concert/concert-1.jpg"

export default function About() {
  const styleImg = {
    backgroundImage: 'url(' + imgsrc + ')',
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
        <Col className="col-11 col-sm-8 text-center">
          <h2>關於綠盟</h2>
          <h1>一個草根環保團體，20年間究竟可以帶來什麼改變？</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        {/* landing image */}
        <Container style={styleImg} />
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="col-10 col-md-8 col-lg-9">
          <AboutMD />
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}
