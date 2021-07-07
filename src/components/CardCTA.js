import React, { Component } from 'react'
import ButtonGCAA from './ButtonGCAA'
import { Container, Row, Col } from 'react-bootstrap'

export default class CardCTA extends Component {
  render() {
    return (
      <Container fluid className="p-2">
        <Row className="align-items-center">
          <Col>
            <h3>陪伴綠盟走向下一個二十年</h3>
            <ButtonGCAA WithNav/>
          </Col>
          <Col>
            <img
              src="https://www.getillustrations.com/packs/tuesday-minimal-illustrations-pack/scenes/_1x/nature%20_%20man,%20carry,%20log,%20wood,%20teamwork,%20outdoors_md.png"
              style={{ width: '100%' }}
              alt="陪伴綠盟走向下一個二十年"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
