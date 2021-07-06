import { Container, Row, Col } from "react-bootstrap"
import ImageGallery from 'react-image-gallery';
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
          <h1>藝術與土地的匯流</h1>
          <h2>綠盟20藝術公益聯展</h2>
        </Col>
      </Row>
      <ImageGallery items={data} />
      <Row className="justify-content-center align-items-center pt-4">
        <Col className="col-11 col-sm-8">
          <ExhibitionMD />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}

export default Exhibition
