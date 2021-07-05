import { Container, Row, Col } from "react-bootstrap"
import ImageGallery from 'react-image-gallery';
import Markdown from "../components/Markdown";
import CardCTA from "../components/CardCTA";

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

const texts = `
集結16位藝術家、27件參展作品的「綠
盟20藝術公益聯展」，於10月18日圓滿落幕。
由發起人之一的版畫家楊忠銘主持開幕導覽揭開
序幕，透過精彩對談，引領大家進入創作者的核
心關懷與內涵，並在16天的展期中，與4位參
展藝術家舉辦藝術對談，活動場場爆滿，每位與
會者都陶醉在藝術的美妙韻味中，迴響熱烈感動。

版畫家楊忠銘表示會發起這次聯展是「因為希望
將小時候聞到的泥土地的味道留給下一代」，忠銘
認為綠盟與藝術家們有著對土地同樣的愛，希望
透過跨界合作，讓彼此的受眾認識更多元的藝術
與環境議題，也希望彼此守護土地的心意，能串
起更多行動，邁向更好的未來。此次展出空間的
雄獅星空說，這是他們首次與公民團體合作舉辦
公益聯展，也很難得看到與會者與導覽人共同交
織出如此精彩的開幕導覽，認為這場聯展是環保
意識和藝術表現的完美融合。

2020年是綠盟創會的第20年，朝向下一世代的
環境轉型任務艱鉅，很感謝藝術家們捐贈作品，
義賣所得全數捐給綠盟支持推動非核減煤、能源
轉型及污染治理的工作，也期待藉由更多藝術交
流讓社會大眾感受自然之美，從美感經驗中產生
環境永續的意識，擴大公民行動的力量。

> 撰文／曾虹文
`

function Exhibition() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8 text-center">
          <h1>藝術與土地的匯流 綠盟20藝術公益聯展</h1>
          <h2>綠盟20藝術公益聯展圓滿落幕</h2>
        </Col>
      </Row>
      <ImageGallery items={data} />
      <Row className="justify-content-center align-items-center pt-4">
        <Col className="col-11 col-sm-8">
          <Markdown content={texts} />
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
