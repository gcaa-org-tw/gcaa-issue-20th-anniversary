import Avatar from '../../components/Avatar'

export default function DigitalAge() {
  return ({
    title : `2050臺灣想像：從環境正義到永續轉型`,
    subtitle : `數位時代下的環境賦權：社會治理挑戰國家管理`,
    content : content,
    speakers : speakers,
    imgSrc : 'img/speaks/tamsui-river.jpg',
  })
}

const speakers = (<div>
  <Avatar name="陳建志" avatarUrl="img/avatar/s3_chen.jpg"/>
  <Avatar name="張岱屏" avatarUrl="img/avatar/s3_chang.jpg"/>
  <Avatar name="李永展" avatarUrl="img/avatar/s3_lee.jpg"/>
</div>)

const content = `
隨著數位時代的來臨，公民社會得到新的工具，
可以更有效地挑戰國家設定的政策方向，促進公
共政策轉型。但這樣的轉變不會因資訊技術的發
展自然而然發生，場次二的四位講者，從不同的
角度說明了轉變的可能。
`
