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
          <p>現任綠色公民行動聯盟理事、癌症希望基金會專員、台灣公共衛生促進協會常務理事、自由撰稿人，曾任綠色公民行動聯盟專職工作者、聯合報記者。</p>
          <p>共同參與創設「綠色公民行動聯盟」，積極投身環運，也長年擔任綠盟的理事，成為終身的環境志工。2017年即使罹癌仍積極參與公益，於綠盟的二十週年紀念音樂會上，以創會成員的身分上台致詞，回顧環境運動路上的點滴，獲得與會者的敬佩與感動，2021年6月因病離世，在此為我們的同志與夥伴，致上永遠的紀念。</p>
        </Col>
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}
