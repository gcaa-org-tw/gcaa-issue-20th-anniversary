import { Container, Row, Col } from "react-bootstrap"
import CardCTA from "../components/CardCTA";
import { react as EpilogueMD } from './epilogue.md'

export default function Epilogue() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8 text-center">
          <h2>20週年 秘書長的話</h2>
          <h1>為下一個世代的環境，堅定破浪前行</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="col-10 col-md-8 col-lg-9">
          <EpilogueMD />
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}
