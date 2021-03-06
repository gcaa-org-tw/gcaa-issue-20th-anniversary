import { Container, Row, Col } from "react-bootstrap"
import ImageGallery from 'react-image-gallery';
import ButtonGCAA from "../components/ButtonGCAA";
import CardCTA from "../components/CardCTA";
import { react as ExhibitionMD } from './exhibition.md'

function imageData(filename, desc) {
  var data = {
    original: 'img/exhibition/' + filename,
    thumbnail: 'img/exhibition/thumbnail-' + filename,
    description: desc,
  }
  return data
}

const images = [
  { filename : 'crew.jpg', desc : '策展團隊合影' },
  { filename : 'visitors.jpg', desc : '參觀人群仔細欣賞畫作' },
  { filename : 'visitors-2.jpg', desc : '參觀人群' },
  { filename : 'yang.jpg', desc : '藝術家楊忠銘導覽中' },
  { filename : 'exhibition-1.jpg', desc : '綠盟20藝術展展場' },
  { filename : 'exhibition-2.jpg', desc : '綠盟20藝術展展場' },
  { filename : 'keynote.jpg', desc : '藝術家對談' },
]

const data = images.map(e => imageData(e.filename, e.desc))

function Exhibition() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8 text-center">
          <h1>綠盟20藝術公益聯展</h1>
        </Col>
      </Row>
      <ImageGallery items={data} />
      <Row className="justify-content-center justify-content-md-evenly pt-4">
        <Col className="col-8 col-md-6 col-lg-2 order-lg-first order-last">
          <div class="sticky-sidebar">
            <Container fluid className="p-2">
                <Row className="align-items-center pb-2">
                  <Col className="mx-auto">
                    <h6>綠盟20藝術展座談會</h6>
                    <h5>凝視自然之境：探索藝術與土地的匯流</h5>
                    <p>與談藝術家：王耀俊、胡棟民、楊忠銘、劉淑美</p>
                    <p>主持人：林瓊華<small>（綠色公民行動聯盟常務理事、國立台北藝術大學通識教育中心兼任助理教授）</small></p>
                    <div className="pt-1">
                      <ButtonGCAA
                        WithNav
                        text="觀看講座錄影"
                        href='https://www.youtube.com/watch?v=kBecDYoba0M&list=PLV4Jc0hvQg9HfVqzsSkJSYooBSiKe7usW&index=5'
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
        </Col>
        <Col className="col-10 col-md-8 col-lg-9">
          <Row>
            <ExhibitionMD />
          </Row>
          <Row className="justify-content-center align-items-center pt-4">
            <Col className="col-11 col-md-8 col-lg-8">
              <CardCTA />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Exhibition
