import { Container, Row, Col } from "react-bootstrap"
import CardCTA from "../components/CardCTA";

export default function HuiMin() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8 text-center">
          <h2>追思感謝</h2>
          <h1>永遠的紀念 劉惠敏</h1>
          <h3>1978.6.1 – 2021.6.29</h3>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="col-10 col-md-8 col-lg-9">
          {/* content */}
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}
