import { Container, Row, Col } from "react-bootstrap"
import ImageGallery from 'react-image-gallery';
import CardCTA from "../components/CardCTA";

function imageData(imageId, desc) {
  var data = {
    original: 'img/concert/concert-' + imageId + '.jpg',
    thumbnail: 'img/concert/thumbnail-concert-' + imageId + '.jpg',
    description: desc,
  }
  return data
}

const images = [
  {
    id : 1,
    desc : '2020年是綠盟成立的第20年，以「破浪前行」、感恩音樂會的形式，感謝一路上一直陪伴綠盟前行的夥伴。'
  },
  {
    id : 2,
    desc : '2020年因為疫情讓我們重新看待日常，也小心謹慎的保護身邊的人。入場前工作人員為避免任何一絲疏漏，仔細的在每張椅子上噴上酒精、消毒。'
  },
  {
    id : 3,
    desc : '音樂會首先由綠盟現任理事長賴偉傑開場，細數綠盟20年來的蛻變與成長。'
  },
  {
    id : 4,
    desc : '第一組表演嘉賓，由一直以來非常支持綠盟的林暉鈞老師，帶領顏琬惠與李伯蒼兩位老師，共同組成古典樂三重奏，揭開音樂會的序幕。'
  },
  {
    id : 5,
    desc : '一直以來，綠盟在不同的能源議題與轉型道路上，有著很多夥伴的支持，我們邀請對綠盟相當支持的青中壯年夥伴，分享他們在各自不同的角色與位置上，綠盟對他們的意義。'
  },
  {
    id : 6,
    desc : '音樂會的重頭戲之一，是巴奈帶著秘書長愫欣展現苦練數週的佛朗明哥舞，在音樂會首次亮相，臺下的參與者驚呼連連。'
  },
  {
    id : 7,
    desc : '巴奈也在音樂會獻聲了他新專輯中的作品，同時巴奈也策劃與帶領綠盟工作同仁一起演練音樂會的演出節目。'
  },
  {
    id : 8,
    desc : '綠盟20年回顧影片，勾起了在場許多參與者的回憶。'
  },
  {
    id : 9,
    desc : '專注看著影片與演出的參與者。'
  },
  {
    id : 10,
    desc : '綠盟的另一位好朋友—林生祥。生祥總是在環境議題上不吝付出時間與專業，身體力行的支持著我們。'
  },
  {
    id : 11,
    desc : '綠盟的20年，是靠眾人之力才能稍有寸進，募款環節，台下的夥伴一一舉著手、支持綠盟望向更遠、走向更深。'
  },
  {
    id : 12,
    desc : '綠盟近年來以「透明足跡」（註）作為環境監督的利器，獲得許多夥伴的支持。（註）透明足跡是綠盟一個追蹤企業污染數據與環境表現的專案，此網站為一工具，透過視覺化系統，使艱澀的數據更好理解，讓全民都有機會掌握環境問題。'
  },
  {
    id : 13,
    desc : '巴奈與綠盟夥伴完成演出，感謝大家一路以來的支持與陪伴。'
  },
  {
    id : 14,
    desc : '音樂會尾聲，許多綠盟過去的好夥伴一一上台，理事趙家葦與立委洪申翰宣布募款金額達到一定就減肥10公斤的宣示，帶起了最後一波高潮。'
  },
  {
    id : 15,
    desc : '大家一起攜手，再邁向綠盟的下個20。'
  },
]

const data = images.map(e => imageData(e.id, e.desc))

const texts = `
2020是綠盟成立的20週年，走過20個年頭，我們希望能永遠一如草創時期的活力，朝向下一個世代的環境轉型任務如此艱鉅，未來仍須奮勇破浪前行，我們都在同一條船上，要靠眾人之力才能稍有寸進。回首20年，一路以來有著許多熱愛環境及關懷社會的夥伴默默地支持我們的行動，一切點滴在心。 撰文／劉如意
`

export default function Concert() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-sm-8 text-center">
          <h1>綠盟20 破浪前行</h1>
          <h2>20週年感恩音樂會活動花絮</h2>
          <p>{ texts }</p>
        </Col>
      </Row>
      <ImageGallery items={data} />
      <Row className="justify-content-center align-items-center">
        <Col className="col-11 col-md-8 col-lg-6">
          <CardCTA />
        </Col>
      </Row>
    </Container>
  )
}

