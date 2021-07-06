import { Col } from "react-bootstrap";

export default function Avatar(props) {
  return (
    <Col xs="6" className="mx-auto p-2 text-center">
      <img className="Avatar"
        src={props.avatarUrl}
        style={{ width: '80px', height: '80px', borderRadius: '50%', fill: 'grey' }}
        alt={props.name}
      />
      {props.desc ? (
        <div class="py-2">
          <div>{props.name}</div>
          <div class="p-1" style={{ fontSize: '0.8em' }}>{props.desc}</div>
        </div>
      ) : (
        <div class="py-2">{props.name}</div>
      )}
    </Col>
  );
}

export const SpeakersData = {
  "林聖崇":
    {
      desc: "資深環運人，生態保育聯盟總召集人",
      img: "s1_linsc.jpg",
    },
  "林瓊華":
    {
      desc: "國立台北藝術大學通識教育中心兼任助理教授，曾任綠色公民行動聯盟理事長",
      img: "s1_linch.jpg",
    },
  "張則周":
    {
      desc: "台大農化系退休教授",
      img: "s2_chang.jpg",
    },
  "陳建志":
    {
      desc: "前台灣永續聯盟秘書長、台灣綠色公民行動聯盟秘書長、理事",
      img: "s3_chen.jpg",
    },
  "張岱屏":
    {
      desc: "公共電視《我們的島》節目企劃",
      img: "s3_chang.jpg",
    },
  "李永展":
    {
      desc: "中華經濟研究院研究員",
      img: "s3_lee.jpg",
    },
  "童智偉":
    {
      desc: "野果創意工作室負責人，鼓手、音控師，最常在凱道上做場過夜的男人（別名幕後黑手）",
      img: "s4_tung.jpg",
    },
  "吳志寧":
    {
      desc: "切音樂電影有限公司負責人，創作音樂人、929樂團主唱",
      img: "s4_wu.jpg",
    },
  "施逸翔":
    {
      desc: "台灣人權促進會秘書長",
      img: "s5_shi.jpg",
    },
  "周于萱":
    {
      desc: "婦女新知基金會秘書長",
      img: "s5_chou.jpg",
    },
  "林欣怡":
    {
      desc: "台灣廢除死刑推動聯盟執行長",
      img: "s5_lin.jpg",
    },
  "吳靜如":
    {
      desc: "台灣國際勞工協會研究員",
      img: "s5_wu.jpg",
    },
  "鄭有傑":
    {
      desc: "導演、編劇、演員與製作人",
      img: "s6_cheng.jpg",
    },
  "林木材":
    {
      desc: "台灣國際紀錄片影展策展人",
      img: "s6_lin.jpg",
    },
  "賴偉傑":
    {
      desc: "綠色公民行動聯盟理事長",
      img: "f1_lai.jpg",
    },
  "李根政":
    {
      desc: "地球公民基金會執行長",
      img: "f1_lee.jpg",
    },
  "詹順貴":
    {
      desc: "全國律師會副會長",
      img: "f1_chan.jpg",
    },
  "朱增宏":
    {
      desc: "社團法人台灣動物社會研究會執行長",
      img: "f1_chu.jpg",
    },
  // "林聖崇":
  //   {
  //     desc: "資深環運人，生態保育聯盟總召集人",
  //     img: "f1_lin.jpg",
  //   },
  "陳曼麗":
    {
      desc: "曾任主婦聯盟環境保護基金會董事長、前立委",
      img: "person-circle.svg",
    },
  "杜文苓":
    {
      desc: "政治大學公共行政系教授",
      img: "f2_tu.jpg",
    },
  "曾虹文":
    {
      desc: "綠色公民行動聯盟副秘書長",
      img: "f2_tseng.jpg",
    },
  "耿璐":
    {
      desc: "開放文化基金會執行秘書",
      img: "f2_ken.jpg",
    },
  "林韋廷":
    {
      desc: "工業技術研究院綠能與環境研究所研究員",
      img: "f2_lin.jpg",
    },
  "趙家瑋":
    {
      desc: "綠色公民行動聯盟常務理事",
      img: "f3_chao.jpg",
    },
  "魏揚":
    {
      desc: "綠色公民行動聯盟研究員",
      img: "f3_wei.jpg",
    },
  "李易昆":
    {
      desc: "庶民發電學習社區合作社理事主席",
      img: "f3_lee.jpg",
    },
  "陳惠萍":
    {
      desc: "陽光伏特家共同創辦人",
      img: "f3_chen.jpg",
    },
}
