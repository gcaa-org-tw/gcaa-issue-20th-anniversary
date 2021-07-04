import Avatar from '../../components/Avatar'

export default function Sustainability() {
  return ({
    title : `2050臺灣想像：從環境正義到永續轉型`,
    subtitle : `永續轉型的支持體系：從能源轉型到新發展想像`,
    content : content,
    speakers : speakers,
    imgSrc : 'img/speaks/tamsui-river.jpg',
  })
}

const speakers = (<div>
  <Avatar name="戴興盛" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="魏揚" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="李易昆" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="陳惠萍" avatarUrl="img/avatar/person-circle.svg"/>
</div>)

const content = `
「讓人有機會講話，比他講什麼話重要，這是社大
這樣的學習社群，可以提供的空間。」蘆荻社大學
庶民發電學習社區合作社主任李易昆在論壇的第
三場次：「永續轉型的支持體系：從能源轉型到新
發展想像」中，以這句話精闢的點出社會改革的
力量，是奠基於每個人都有機會表達、如何對待
彼此，進而建立人與人之間的關係、形成群體。
`
