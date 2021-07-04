import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <div class="bg-primary footer">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={3} className="mb-4 text-center">
              <img src="img/logo.png" style={{ width: '100px', height: 'auto' }} />
            </Col>
            <Col className="col-12 col-sm-7">
              <Row className="justify-content-center">
                <Col className="col-8 col-md-6">
                  <p>發行：綠色公民行動聯盟</p>
                  <p>地址：10084 台北市中正區羅斯福路二段70號8樓之3</p>
                  <p>電話：02-2393-0500</p>
                  <p>劃撥帳號：19502362</p>
                  <p>戶名：社團法人台灣綠色公民行動聯盟協會</p>
                  <p>理事長：賴偉傑</p>
                  <p>理監事：賴偉傑、林瓊華、趙家緯、卞中佩、江櫻梅、李育欣、房思宏、袁明豪、莊冠駿、黃淑德、劉惠敏、林垕君、涂又文、葉嘉彬</p>
                </Col>
                <Col className="col-8 col-md-6">
                  <p>秘書處成員：崔愫欣、曾虹文、陳詩婷、柯乾庸、洪萱芳、魏揚、陳震遠、劉如意、黃亭勻、林昱彤、洪詳崴、廖原圻</p>
                  <p>執行編輯：崔愫欣、柯乾庸</p>
                  <p>美術編輯：劉耘</p>
                  <p>封面設計：劉耘</p>
                  <p>印刷：精彥印刷企業社</p>
                  <p>發行日期：2021.04</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer
